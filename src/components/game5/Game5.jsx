import { useState, useCallback, useEffect, useRef } from 'react';
import { hsk3Vocabulary } from '../../data/vocabulary';
import { hsk4Vocabulary } from '../../data/vocabularyHsk4';
import useGameStore from '../../store/useGameStore';
import ProgressBar from '../shared/ProgressBar';
import ResultScreen from '../shared/ResultScreen';

function charCount(s) {
  return s.replace(/\s/g, '').length;
}

function getOptions(word, allWords) {
  const targetChars = charCount(word.char);
  const pool = allWords
    .filter((w) => w.id !== word.id && charCount(w.char) === targetChars)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
  const options = [word, ...pool].sort(() => Math.random() - 0.5);
  return { options, correctIndex: options.findIndex((o) => o.id === word.id) };
}

function buildQuestions(allWords) {
  const shuffled = [...allWords].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 30).map((word) => {
    const { options, correctIndex } = getOptions(word, allWords);
    return { word, options, correctIndex };
  });
}

// ── Audio engine ────────────────────────────────────────────────────────────
// Tries Web Speech API first (for Safari/firefox), then Google TTS (Chrome/Edge)

let _audio = null;

function playAudio(text) {
  return new Promise((resolve) => {
    // Stop any currently playing audio
    if (_audio) {
      _audio.pause();
      _audio.currentTime = 0;
      _audio = null;
    }

    // Encode text for Google TTS URL
    const encoded = encodeURIComponent(text);

    // Try Google Translate TTS (Chrome/Edge — high quality, no CORS)
    const googleUrl = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encoded}&tl=zh-CN&client=tw-ob`;

    const audio = new Audio(googleUrl);
    audio.crossOrigin = 'anonymous';

    audio.oncanplaythrough = () => {
      _audio = audio;
      audio.play().catch(() => {});
      // Estimate duration (approx 600ms per Chinese character)
      const estDuration = Math.max(text.length * 0.5 + 0.3, 0.5);
      setTimeout(resolve, estDuration * 1000);
    };

    audio.onerror = () => {
      // Fallback: Web Speech API
      try {
        window.speechSynthesis.cancel();
        const utter = new window.SpeechSynthesisUtterance(text);
        utter.lang = 'zh-CN';
        utter.rate = 0.75;

        const voices = window.speechSynthesis.getVoices();
        const zh = voices.find((v) => v.lang.startsWith('zh')) || null;
        if (zh) utter.voice = zh;

        utter.onend = () => resolve();
        utter.onerror = () => resolve();
        window.speechSynthesis.speak(utter);

        // Timeout fallback
        setTimeout(resolve, Math.max(text.length * 0.5 + 0.5, 0.8) * 1000);
      } catch (_) {
        resolve();
      }
    };

    audio.load();
  });
}

function cancelAudio() {
  if (_audio) {
    try { _audio.pause(); } catch (_) {}
    _audio = null;
  }
  try { window.speechSynthesis.cancel(); } catch (_) {}
}

const QUESTIONS_PER_ROUND = 30;

export default function Game5({ onHome, hskLevel = '3' }) {
  const vocabulary = hskLevel === '4' ? hsk4Vocabulary : hsk3Vocabulary;
  const recordGame5 = useGameStore((s) => s.recordGame5);
  const [questions] = useState(() => buildQuestions(vocabulary));
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [flash, setFlash] = useState(null);
  const [playing, setPlaying] = useState(false);

  const q = questions[current];
  const answered = selected !== null;
  const isCorrect = answered && selected === q.correctIndex;

  // Auto-play on new question
  useEffect(() => {
    if (!q) return;
    const timer = setTimeout(async () => {
      setPlaying(true);
      await playAudio(q.word.char);
      setPlaying(false);
    }, 500);
    return () => {
      clearTimeout(timer);
      cancelAudio();
    };
  }, [current]);

  const handleSelect = useCallback(
    (idx) => {
      if (answered) return;
      cancelAudio();
      setSelected(idx);
      const correct = idx === q.correctIndex;
      if (correct) setScore((s) => s + 1);
      setFlash(correct ? 'correct' : 'wrong');
      setTimeout(() => setFlash(null), 400);
      if (correct) {
        setTimeout(() => {
          setCurrent((prev) => {
            if (prev + 1 >= QUESTIONS_PER_ROUND) {
              recordGame5(score + 1, QUESTIONS_PER_ROUND);
              setShowResult(true);
              return prev;
            }
            return prev + 1;
          });
          setSelected(null);
        }, 900);
      }
    },
    [answered, q, score, recordGame5]
  );

  const handleNext = useCallback(() => {
    const isWrong = selected !== null && selected !== q.correctIndex;
    const finalScore = isWrong ? score + 1 : score;
    cancelAudio();
    if (current + 1 >= QUESTIONS_PER_ROUND) {
      recordGame5(finalScore, QUESTIONS_PER_ROUND);
      setShowResult(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
    }
  }, [current, score, selected, q, recordGame5]);

  const handlePlay = useCallback(async () => {
    cancelAudio();
    setPlaying(true);
    await playAudio(q.word.char);
    setPlaying(false);
  }, [q]);

  if (showResult) {
    return (
      <>
        {flash && (
          <div
            className={`fixed inset-0 z-50 pointer-events-none transition-opacity duration-300 ${
              flash === 'correct' ? 'bg-emerald-500' : 'bg-red-500'
            } opacity-20`}
          />
        )}
        <ResultScreen
          score={score}
          total={QUESTIONS_PER_ROUND}
          onRetry={() => window.location.reload()}
          onHome={onHome}
          gameType="game5"
        />
      </>
    );
  }

  return (
    <div className="flex flex-col gap-6 max-w-md mx-auto py-8 px-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-ink-800">🎧 Listen & Choose</h2>
          <p className="text-sm text-ink-400">Select the character you heard</p>
        </div>
        <div className="text-right">
          <span className="text-2xl font-bold text-red-600">{score}</span>
          <span className="text-ink-400 text-sm"> / {QUESTIONS_PER_ROUND}</span>
        </div>
      </div>

      <ProgressBar current={current + 1} total={QUESTIONS_PER_ROUND} />

      {/* Audio card */}
      <div className="card p-10 flex flex-col items-center gap-5 bg-gradient-to-br from-white to-ink-50">
        {/* Animated speaker */}
        <div className="relative">
          <div
            className={`w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300 ${
              playing
                ? 'bg-red-100 border-4 border-red-400 scale-105'
                : 'bg-ink-50 border-4 border-ink-200'
            }`}
          >
            <span
              className={`text-5xl transition-all duration-200 ${
                playing ? 'animate-pulse opacity-100' : 'opacity-30'
              }`}
            >
              🔊
            </span>
          </div>
          {playing && (
            <div className="absolute inset-0 rounded-full border-4 border-red-400 animate-ping opacity-40" />
          )}
        </div>

        {/* English hint */}
        <div className="text-sm text-ink-500 bg-ink-50 px-5 py-2.5 rounded-xl border border-ink-100 font-medium">
          {q.word.en}
        </div>

        {/* Play button */}
        <button
          onClick={handlePlay}
          disabled={playing}
          className={`px-10 py-4 rounded-2xl font-bold text-xl transition-all duration-200 active:scale-95 ${
            playing
              ? 'bg-ink-100 text-ink-400 cursor-not-allowed'
              : 'bg-red-600 text-white hover:bg-red-700 shadow-sm'
          }`}
        >
          {playing ? '🔊 Playing...' : '▶  Play Word'}
        </button>

        <div className="text-xs text-ink-300">
          Question {current + 1} of {QUESTIONS_PER_ROUND}
        </div>
      </div>

      {/* Options — characters only */}
      <div className="grid grid-cols-2 gap-3">
        {q.options.map((opt, idx) => {
          let cls = 'option-btn flex-col items-center py-8 gap-1.5 text-center';
          if (answered) {
            cls += ' disabled';
            if (idx === q.correctIndex) cls += ' correct';
            else if (idx === selected) cls += ' wrong';
          }
          return (
            <button key={idx} className={cls} onClick={() => handleSelect(idx)}>
              <span className="text-xs text-ink-400 font-mono">{idx + 1}</span>
              <span className="font-chinese text-4xl font-bold">{opt.char}</span>
            </button>
          );
        })}
      </div>

      {/* Feedback */}
      {answered && (
        <div
          className={`card p-4 border-2 ${
            isCorrect ? 'border-emerald-300 bg-emerald-50' : 'border-red-300 bg-red-50'
          }`}
        >
          <div className="flex items-start gap-3">
            <span className="text-2xl">{isCorrect ? '✅' : '❌'}</span>
            <div>
              <div className={`font-bold ${isCorrect ? 'text-emerald-700' : 'text-red-700'}`}>
                {isCorrect ? 'Correct!' : 'Incorrect'}
              </div>
              {!isCorrect && (
                <div className="text-sm text-ink-600 mt-1">
                  The answer is{' '}
                  <span className="font-bold font-chinese text-emerald-700 text-xl">
                    {q.options[q.correctIndex].char}
                  </span>{' '}
                  <span className="text-ink-400">— {q.options[q.correctIndex].en}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {answered && (
        <button className="btn-primary w-full mt-2" onClick={handleNext}>
          {current + 1 >= QUESTIONS_PER_ROUND ? '📊 See Results' : 'Next →'}
        </button>
      )}

      {!answered && (
        <p className="text-center text-xs text-ink-300">
          Press ▶ to play, then 1-4 to select
        </p>
      )}
    </div>
  );
}
