import { useState, useEffect, useCallback, useRef } from 'react';
import { hsk3Vocabulary } from '../data/vocabulary';
import { grammarQuizBank } from '../data/quizBank';
import { sentenceBank } from '../data/sentenceBank';
import { hsk4Vocabulary } from '../data/vocabularyHsk4';
import { hsk4GrammarBank } from '../data/quizBankHsk4';
import { hsk4SentenceBank } from '../data/sentenceBankHsk4';
import useGameStore from '../store/useGameStore';
import ProgressBar from '../components/shared/ProgressBar';
import ResultScreen from '../components/shared/ResultScreen';

// Count Chinese characters (1 char = 1 syllable/pinyin)
function charCount(s) {
  return s.replace(/\s/g, '').length;
}

// Build one chunk of 20 questions: 5 of each type
function buildChunk(chunkIndex, level) {
  const vocab = level === '4' ? hsk4Vocabulary : hsk3Vocabulary;
  const grammar = level === '4' ? hsk4GrammarBank : grammarQuizBank;
  const sentences = level === '4' ? hsk4SentenceBank : sentenceBank;
  const chunk = [];
  const start = chunkIndex * 5;

  // ── 5 × Char → Pinyin ──────────────────────────────────────────────────
  const vocabList = [...vocab].sort(() => Math.random() - 0.5);
  for (let i = 0; i < 5; i++) {
    const word = vocabList[(start + i) % vocabList.length];
    const targetChars = charCount(word.char);
    const poolWords = vocabList.filter(
      (w) => w.id !== word.id && charCount(w.char) === targetChars
    ).sort(() => Math.random() - 0.5);
    const options = [word.pinyin, ...poolWords.slice(0, 3).map((w) => w.pinyin)]
      .sort(() => Math.random() - 0.5);
    chunk.push({
      id: `g1-${chunkIndex}-${i}`,
      gameType: 'game1',
      type: 'char-pinyin',
      question: word.char,
      options,
      answer: options.indexOf(word.pinyin),
      word,
    });
  }

  // ── 5 × Pinyin → English ──────────────────────────────────────────────
  const vocab2 = [...vocab].sort(() => Math.random() - 0.5);
  for (let i = 0; i < 5; i++) {
    const word = vocab2[(start + i) % vocab2.length];
    const targetSyls = charCount(word.char);
    const poolWords = vocab2.filter(
      (w) => w.id !== word.id && charCount(w.char) === targetSyls
    ).sort(() => Math.random() - 0.5);
    const options = [word.en, ...poolWords.slice(0, 3).map((w) => w.en)]
      .sort(() => Math.random() - 0.5);
    chunk.push({
      id: `g2-${chunkIndex}-${i}`,
      gameType: 'game2',
      type: 'pinyin-english',
      question: word.pinyin,
      options,
      answer: options.indexOf(word.en),
      word,
    });
  }

  // ── 5 × Grammar Fill-in ───────────────────────────────────────────────
  const shuffledGrammar = [...grammar].sort(() => Math.random() - 0.5);
  for (let i = 0; i < 5; i++) {
    const gq = shuffledGrammar[(start + i) % shuffledGrammar.length];
    chunk.push({
      id: `g3-${chunkIndex}-${i}`,
      gameType: 'game3',
      type: 'grammar',
      question: gq.sentence,
      options: gq.options,
      answer: gq.answer,
      explanation: gq.explanation,
    });
  }

  // ── 5 × Arrange Words ─────────────────────────────────────────────────
  const shuffledSentences = [...sentences].sort(() => Math.random() - 0.5);
  for (let i = 0; i < 5; i++) {
    const sq = shuffledSentences[(start + i) % shuffledSentences.length];
    chunk.push({
      id: `g4-${chunkIndex}-${i}`,
      gameType: 'game4',
      type: 'arrange',
      sentence: sq,
      words: sq.words,
      correct: sq.correct,
    });
  }

  return chunk.sort(() => Math.random() - 0.5);
}

function buildTest(level) {
  const questions = [];
  for (let c = 0; c < 3; c++) {
    questions.push(...buildChunk(c, level));
  }
  return questions; // 60 total
}

const TOTAL = 60;
const CHUNK_SIZE = 20; // 5 of each type × 4 types

function Timer({ seconds }) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  const isLow = seconds < 300;
  return (
    <div className={`font-mono text-lg font-bold ${isLow ? 'text-red-600 animate-pulse' : 'text-ink-600'}`}>
      {String(m).padStart(2, '0')}:{String(s).padStart(2, '0')}
    </div>
  );
}

// ── Arrange Words sub-component (rendered inline in test) ─────────────────
function ArrangeQuestion({ q, answered, isCorrect, placed, available, onPlace, onUnplace, onCheck, onNext }) {
  const allPlaced = available.length === 0;
  return (
    <div className="flex flex-col gap-4">
      {/* English */}
      <div className="card p-3 bg-amber-50 border-amber-200 text-sm text-amber-800">
        💡 {q.sentence.english}
      </div>

      {/* Answer area */}
      <div className="min-h-[64px] card p-3 bg-ink-50 border-2 border-dashed border-ink-200 flex flex-wrap gap-2 items-start">
        {placed.length === 0 ? (
          <span className="text-ink-300 text-sm italic">Click words below to build the sentence...</span>
        ) : (
          placed.map((word, idx) => {
            let cls = 'px-4 py-2 rounded-xl font-chinese text-lg font-semibold border-2 transition-all cursor-pointer ';
            if (answered) {
              cls += word === q.sentence.correct.split(' ')[idx]
                ? 'bg-emerald-100 border-emerald-400 text-emerald-800'
                : 'bg-red-100 border-red-400 text-red-800 cursor-default';
            } else {
              cls += 'bg-white border-blue-300 text-blue-800 hover:border-blue-500';
            }
            return (
              <button key={idx} className={cls} onClick={() => !answered && onUnplace(idx)} disabled={answered}>
                {word}
              </button>
            );
          })
        )}
      </div>

      {/* Word bank */}
      <div className="flex flex-wrap gap-2 justify-center min-h-[52px]">
        {available.map((word, idx) => (
          <button
            key={idx}
            className="px-4 py-2 rounded-xl font-chinese text-base font-semibold bg-white border-2 border-ink-200 text-ink-700 hover:border-blue-400 hover:bg-blue-50 transition-all cursor-pointer active:scale-95"
            onClick={() => onPlace(word)}
          >
            {word}
          </button>
        ))}
      </div>

      {/* Check / Next */}
      {answered ? (
        <div className="flex flex-col gap-2">
          <div className={`text-center py-2 rounded-xl font-semibold ${isCorrect ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
            {isCorrect ? '✅ Correct!' : '❌ Incorrect'}
          </div>
          {!isCorrect && (
            <div className="card p-3 border-red-200 bg-red-50 text-sm text-red-700">
              <div className="font-semibold mb-1">💡 Hint: {q.sentence.hint}</div>
              <div>
                Correct: <span className="font-chinese font-semibold">{q.sentence.correct}</span>
              </div>
            </div>
          )}
          {!isCorrect && (
            <button className="btn-primary w-full" onClick={onNext}>Next →</button>
          )}
        </div>
      ) : (
        <button
          className={`w-full py-3 rounded-xl font-semibold text-lg transition-all ${
            !allPlaced ? 'bg-ink-100 text-ink-300 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700 active:scale-95'
          }`}
          onClick={onCheck}
          disabled={!allPlaced}
        >
          Check Answer
        </button>
      )}

      <div className="text-center text-xs text-ink-300">
        {placed.length} / {q.words.length} words placed
      </div>
    </div>
  );
}

export default function TestMode({ onHome, level = '3' }) {
  const recordTest = useGameStore((s) => s.recordTest);
  const [questions] = useState(() => buildTest(level));
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(45 * 60);
  const [flash, setFlash] = useState(null);
  // Arrange words state
  const [placedWords, setPlacedWords] = useState([]);
  const [availableWords, setAvailableWords] = useState([]);

  const timerRef = useRef(null);

  const q = questions[current];
  const answered = selected !== null || q?.gameType === 'game4';
  const isCorrect = selected !== null && selected === q?.answer;

  // ── Timer ──────────────────────────────────────────────────────────────
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current);
          handleFinish();
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, []);

  // ── Initialize arrange question ─────────────────────────────────────────
  useEffect(() => {
    if (q?.gameType === 'game4') {
      const shuffled = [...q.words].sort(() => Math.random() - 0.5);
      setPlacedWords([]);
      setAvailableWords(shuffled);
      setSelected(null);
    }
  }, [current, q]);

  const handleFinish = useCallback(() => {
    clearInterval(timerRef.current);
    recordTest(score, TOTAL);
    setShowResult(true);
  }, [score, recordTest]);

  // ── Matching games (game1, game2, game3) ────────────────────────────────
  const handleSelect = useCallback(
    (idx) => {
      if (selected !== null || q?.gameType === 'game4') return;
      setSelected(idx);
      if (idx === q.answer) setScore((s) => s + 1);
      setFlash(idx === q.answer ? 'correct' : 'wrong');
      setTimeout(() => setFlash(null), 400);
      if (idx === q.answer) {
        setTimeout(() => {
          if (current + 1 >= TOTAL) {
            handleFinish();
          } else {
            setCurrent((prev) => prev + 1);
            setSelected(null);
          }
        }, 900);
      }
    },
    [selected, q, current, handleFinish]
  );

  const handleNext = useCallback(() => {
    const isWrong = selected !== null && selected !== q?.answer;
    const finalScore = isWrong ? score + 1 : score;
    if (current + 1 >= TOTAL) {
      handleFinish();
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
    }
  }, [current, score, selected, q, handleFinish]);

  // ── Arrange words (game4) ───────────────────────────────────────────────
  const handlePlaceWord = useCallback(
    (word) => {
      if (selected !== null) return;
      setPlacedWords((prev) => [...prev, word]);
      setAvailableWords((prev) => prev.filter((w) => w !== word));
    },
    [selected]
  );

  const handleUnplaceWord = useCallback(
    (idx) => {
      const word = placedWords[idx];
      setPlacedWords((prev) => prev.filter((_, i) => i !== idx));
      setAvailableWords((prev) => [...prev, word]);
    },
    [placedWords]
  );

  const handleCheckArrange = useCallback(() => {
    const assembled = placedWords.join(' ');
    const correct = assembled === q.sentence.correct;
    setSelected(true); // marks as answered
    if (correct) {
      setScore((s) => s + 1);
      setFlash('correct');
      setTimeout(() => setFlash(null), 400);
      setTimeout(() => {
        if (current + 1 >= TOTAL) handleFinish();
        else setCurrent((prev) => prev + 1);
      }, 900);
    } else {
      setFlash('wrong');
      setTimeout(() => setFlash(null), 400);
    }
  }, [placedWords, q, current, handleFinish]);

  // ── Result ──────────────────────────────────────────────────────────────
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
          total={TOTAL}
          onRetry={() => window.location.reload()}
          onHome={onHome}
          gameType="test"
        />
      </>
    );
  }

  // ── Render ─────────────────────────────────────────────────────────────
  const parts = q?.type === 'grammar' ? q.question.split('_____') : null;
  const currentRound = Math.floor(current / CHUNK_SIZE) + 1;

  return (
    <>
      {flash && (
        <div
          className={`fixed inset-0 z-50 pointer-events-none transition-opacity duration-300 ${
            flash === 'correct' ? 'bg-emerald-500' : 'bg-red-500'
          } opacity-20`}
        />
      )}

      <div className="flex flex-col gap-5 max-w-2xl mx-auto py-8 px-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-ink-800">📝 HSK 3 Full Test</h2>
            <p className="text-sm text-ink-400">
              Round {currentRound} of 3 — Question {current + 1} of {TOTAL}
            </p>
          </div>
          <Timer seconds={timeLeft} />
        </div>

        <ProgressBar current={current + 1} total={TOTAL} />

        {/* Type badge */}
        <div className="flex items-center gap-2 flex-wrap">
          {q.gameType === 'game1' && (
            <span className="stat-badge bg-red-50 text-red-700 border border-red-200">
              🔤 Char → Pinyin
            </span>
          )}
          {q.gameType === 'game2' && (
            <span className="stat-badge bg-amber-50 text-amber-700 border border-amber-200">
              📖 Pinyin → English
            </span>
          )}
          {q.gameType === 'game3' && (
            <span className="stat-badge bg-teal-50 text-teal-700 border border-teal-200">
              🏗️ Grammar Fill-in
            </span>
          )}
          {q.gameType === 'game4' && (
            <span className="stat-badge bg-indigo-50 text-indigo-700 border border-indigo-200">
              🧩 Arrange Words
            </span>
          )}
          <span className="ml-auto text-xs text-ink-400 bg-ink-100 px-2 py-1 rounded-full">
            Round {currentRound}
          </span>
        </div>

        {/* ── Question card ──────────────────────────────────────────────── */}
        {q.gameType === 'game4' ? (
          <div className="card p-6 bg-white">
            <ArrangeQuestion
              q={q}
              answered={selected !== null}
              isCorrect={placedWords.join(' ') === q.sentence.correct}
              placed={placedWords}
              available={availableWords}
              onPlace={handlePlaceWord}
              onUnplace={handleUnplaceWord}
              onCheck={handleCheckArrange}
              onNext={handleNext}
            />
          </div>
        ) : (
          <>
            {/* Question */}
            <div className="card p-8 bg-white">
              {q.type === 'char-pinyin' && (
                <>
                  <div className="text-sm text-ink-400 mb-4">What is the pinyin?</div>
                  <div className="chinese-char text-center text-6xl">{q.question}</div>
                  <div className="text-center text-xs text-ink-300 mt-3">
                    HSK 3 Word #{q.word?.id}
                  </div>
                </>
              )}
              {q.type === 'pinyin-english' && (
                <>
                  <div className="text-sm text-ink-400 mb-4">What does this mean?</div>
                  <div className="text-center font-chinese text-2xl font-bold text-ink-900">
                    {q.question}
                  </div>
                </>
              )}
              {q.type === 'grammar' && (
                <>
                  <div className="text-sm text-ink-400 mb-4">Fill in the blank:</div>
                  <div className="text-xl leading-relaxed text-ink-800 font-medium">
                    {parts[0]}
                    <span className="text-red-400 font-bold tracking-widest mx-1 inline-block align-middle">
                      {'_'.repeat(Math.max(q.options[q.answer].length * 2, 4))}
                    </span>
                    {parts[1]}
                  </div>
                </>
              )}
            </div>

            {/* Options */}
            <div className="space-y-3">
              {q.options.map((opt, idx) => {
                let cls = 'option-btn';
                if (selected !== null) {
                  cls += ' disabled';
                  if (idx === q.answer) cls += ' correct';
                  else if (idx === selected) cls += ' wrong';
                }
                return (
                  <button key={idx} className={cls} onClick={() => handleSelect(idx)}>
                    <span className="text-xs text-ink-400 mr-3 font-mono">
                      {String.fromCharCode(65 + idx)}.
                    </span>
                    <span>{opt}</span>
                  </button>
                );
              })}
            </div>

            {/* Feedback */}
            {selected !== null && (
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
                    {!isCorrect && q.explanation && (
                      <div className="text-sm text-ink-600 mt-1">{q.explanation}</div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex gap-3">
              {selected !== null && (
                <button className="btn-primary flex-1" onClick={handleNext}>
                  {current + 1 >= TOTAL ? '📊 Finish Test' : 'Next →'}
                </button>
              )}
              {selected === null && (
                <button className="btn-secondary flex-1" onClick={handleFinish}>
                  Submit Early
                </button>
              )}
            </div>

            {selected !== null && (
              <p className="text-center text-xs text-ink-300">Auto-advances in 0.9s on correct</p>
            )}
          </>
        )}

        {/* Score */}
        <div className="text-center text-sm text-ink-400">
          Score:{' '}
          <span className="font-bold text-ink-700">{score}</span> /{' '}
          {current + 1}
        </div>
      </div>
    </>
  );
}
