import { useState, useCallback } from 'react';
import { hsk3Vocabulary } from '../../data/vocabulary';
import { hsk4Vocabulary } from '../../data/vocabularyHsk4';
import useGameStore from '../../store/useGameStore';
import ProgressBar from '../shared/ProgressBar';
import ResultScreen from '../shared/ResultScreen';

// Count Chinese characters in a word (each = 1 pinyin syllable)
function syllableCount(word) {
  return word.replace(/\s/g, '').length;
}

function buildQuestions(allWords) {
  const shuffled = [...allWords].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 30).map((word) => {
    const targetSyls = syllableCount(word.char);
    // Filter pool: same syllable count, different word
    const pool = allWords
      .filter((w) => w.id !== word.id && syllableCount(w.char) === targetSyls)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map((w) => w.en);
    const options = [word.en, ...pool].sort(() => Math.random() - 0.5);
    const correctIndex = options.indexOf(word.en);
    return { word, options, correctIndex };
  });
}

const QUESTIONS_PER_ROUND = 30;

export default function Game2({ onHome, hskLevel = '3' }) {
  const vocabulary = hskLevel === '4' ? hsk4Vocabulary : hsk3Vocabulary;
  const recordGame2 = useGameStore((s) => s.recordGame2);
  const [questions] = useState(() => buildQuestions(vocabulary));
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [flash, setFlash] = useState(null);

  const q = questions[current];
  const isCorrect = selected !== null && selected === q.correctIndex;
  const answered = selected !== null;

  const handleSelect = useCallback(
    (idx) => {
      if (answered) return;
      setSelected(idx);
      if (idx === q.correctIndex) setScore((s) => s + 1);
      setAnswers((prev) => [
        ...prev,
        { correct: q.correctIndex, selected: idx, word: q.word },
      ]);
      setFlash(idx === q.correctIndex ? 'correct' : 'wrong');
      setTimeout(() => setFlash(null), 400);
      if (idx === q.correctIndex) {
        setTimeout(() => {
          setCurrent((prev) => {
            if (prev + 1 >= QUESTIONS_PER_ROUND) {
              recordGame2(score + 1, QUESTIONS_PER_ROUND);
              setShowResult(true);
              return prev;
            }
            return prev + 1;
          });
          setSelected(null);
        }, 900);
      }
    },
    [answered, q, score, recordGame2]
  );

  const handleNext = useCallback(() => {
    const isWrong = selected !== null && selected !== q.correctIndex;
    const finalScore = isWrong ? score + 1 : score;
    if (current + 1 >= QUESTIONS_PER_ROUND) {
      recordGame2(finalScore, QUESTIONS_PER_ROUND);
      setShowResult(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
    }
  }, [current, score, selected, q, recordGame2]);

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
          gameType="game2"
        />
      </>
    );
  }

  return (
    <div className="flex flex-col gap-6 max-w-md mx-auto py-8 px-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-ink-800">📖 Pinyin → English</h2>
          <p className="text-sm text-ink-400">Select the correct English meaning</p>
        </div>
        <div className="text-right">
          <span className="text-2xl font-bold text-red-600">{score}</span>
          <span className="text-ink-400 text-sm"> / {QUESTIONS_PER_ROUND}</span>
        </div>
      </div>

      <ProgressBar current={current + 1} total={QUESTIONS_PER_ROUND} />

      {/* Pinyin card */}
      <div className="card p-10 flex flex-col items-center gap-3 bg-gradient-to-br from-white to-ink-50">
        <div className="text-sm text-ink-400">What does this mean?</div>
        <div className="font-chinese text-3xl font-bold text-ink-900">{q.word.pinyin}</div>
        <div className="text-xs text-ink-300 mt-1">
          {q.word.pos} • HSK 3 #{q.word.id}
        </div>
      </div>

      {/* Options */}
      <div className="space-y-3">
        {q.options.map((opt, idx) => {
          let cls = 'option-btn';
          if (answered) {
            cls += ' disabled';
            if (idx === q.correctIndex) cls += ' correct';
            else if (idx === selected) cls += ' wrong';
          }
          return (
            <button key={idx} className={cls} onClick={() => handleSelect(idx)}>
              <span className="text-xs text-ink-400 mr-2">{idx + 1}.</span>
              <span>{opt}</span>
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
                  Correct answer:{' '}
                  <span className="font-semibold text-emerald-700">
                    {q.options[q.correctIndex]}
                  </span>
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
        <p className="text-center text-xs text-ink-300">Press 1-4 to select</p>
      )}
    </div>
  );
}
