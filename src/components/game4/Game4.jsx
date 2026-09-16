import { useState, useCallback } from 'react';
import { sentenceBank } from '../../data/sentenceBank';
import { hsk4SentenceBank } from '../../data/sentenceBankHsk4';
import useGameStore from '../../store/useGameStore';
import ProgressBar from '../shared/ProgressBar';
import ResultScreen from '../shared/ResultScreen';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildQuestions(level) {
  const bank = level === '4' ? hsk4SentenceBank : sentenceBank;
  const shuffled = [...bank].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 30).map((item) => ({
    ...item,
    shuffledWords: shuffle(item.words),
  }));
}

const QUESTIONS_PER_ROUND = 30;

export default function Game4({ onHome, hskLevel = '3' }) {
  const recordGame4 = useGameStore((s) => s.recordGame4);
  const [questions] = useState(() => buildQuestions(hskLevel));
  const [current, setCurrent] = useState(0);
  const [placed, setPlaced] = useState([]);    // words in answer area (in order)
  const [available, setAvailable] = useState([]); // words still in bank
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [flash, setFlash] = useState(null);

  const q = questions[current];

  // Initialize question
  const initQuestion = useCallback(() => {
    setPlaced([]);
    setAvailable([...q.shuffledWords]);
    setAnswered(false);
    setIsCorrect(false);
  }, [q]);

  // Load first question on mount
  useState(() => { initQuestion(); });

  const placeWord = useCallback((word) => {
    if (answered) return;
    setPlaced((prev) => [...prev, word]);
    setAvailable((prev) => prev.filter((w) => w !== word));
  }, [answered]);

  const unplaceWord = useCallback((idx) => {
    if (answered) return;
    const word = placed[idx];
    setPlaced((prev) => prev.filter((_, i) => i !== idx));
    setAvailable((prev) => [...prev, word]);
  }, [answered, placed]);

  const checkAnswer = useCallback(() => {
    if (answered || placed.length === 0) return;
    const assembled = placed.join(' ');
    const correct = assembled === q.correct;
    setIsCorrect(correct);
    setAnswered(true);
    if (correct) setScore((s) => s + 1);
    setFlash(correct ? 'correct' : 'wrong');
    setTimeout(() => setFlash(null), 400);
    if (correct) {
      setTimeout(() => {
        if (current + 1 >= QUESTIONS_PER_ROUND) {
          recordGame4(score + 1, QUESTIONS_PER_ROUND);
          setShowResult(true);
        } else {
          const next = current + 1;
          setCurrent(next);
        }
      }, 900);
    }
  }, [answered, placed, q, current, score, recordGame4]);

  const handleNext = useCallback(() => {
    const correct = placed.join(' ') === q.correct;
    const finalScore = correct ? score : score + 1;
    if (current + 1 >= QUESTIONS_PER_ROUND) {
      recordGame4(finalScore, QUESTIONS_PER_ROUND);
      setShowResult(true);
    } else {
      const next = current + 1;
      setCurrent(next);
      setPlaced([]);
      setAvailable([...questions[next].shuffledWords]);
      setAnswered(false);
      setIsCorrect(false);
    }
  }, [current, placed, q, score, questions, recordGame4]);

  // Load question when current changes
  const [prevCurrent, setPrevCurrent] = useState(0);
  if (current !== prevCurrent) {
    setPrevCurrent(current);
    const nextQ = questions[current];
    setPlaced([]);
    setAvailable([...nextQ.shuffledWords]);
    setAnswered(false);
    setIsCorrect(false);
  }

  const allPlaced = available.length === 0;

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
          gameType="game4"
        />
      </>
    );
  }

  return (
    <div className="flex flex-col gap-5 max-w-lg mx-auto py-8 px-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-ink-800">🧩 Arrange the Sentence</h2>
          <p className="text-sm text-ink-400">Click words to build the correct order</p>
        </div>
        <div className="text-right">
          <span className="text-2xl font-bold text-red-600">{score}</span>
          <span className="text-ink-400 text-sm"> / {QUESTIONS_PER_ROUND}</span>
        </div>
      </div>

      <ProgressBar current={current + 1} total={QUESTIONS_PER_ROUND} />

      {/* English hint */}
      <div className="card p-4 bg-amber-50 border-amber-200 text-sm text-amber-800">
        💡 {q.english}
      </div>

      {/* Answer area */}
      <div className="min-h-[72px] card p-4 bg-ink-50 border-2 border-dashed border-ink-200 flex flex-wrap gap-2 items-start">
        {placed.length === 0 ? (
          <span className="text-ink-300 text-sm italic">Click words below to build the sentence...</span>
        ) : (
          placed.map((word, idx) => (
            <button
              key={idx}
              className={`px-4 py-2 rounded-xl font-chinese text-lg font-semibold border-2 transition-all duration-150 ${
                answered
                  ? isCorrect
                    ? 'bg-emerald-100 border-emerald-400 text-emerald-800 cursor-default'
                    : word === q.correct.split(' ')[idx]
                    ? 'bg-emerald-100 border-emerald-400 text-emerald-800'
                    : 'bg-red-100 border-red-400 text-red-800'
                  : 'bg-white border-blue-300 text-blue-800 hover:border-blue-500 cursor-pointer hover:bg-blue-50'
              }`}
              onClick={() => !answered && unplaceWord(idx)}
              disabled={answered}
            >
              {word}
            </button>
          ))
        )}
      </div>

      {/* Divider */}
      {available.length > 0 && (
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-ink-200" />
          <span className="text-xs text-ink-400">Available words</span>
          <div className="flex-1 h-px bg-ink-200" />
        </div>
      )}

      {/* Word bank */}
      <div className="flex flex-wrap gap-2 justify-center min-h-[60px]">
        {available.map((word, idx) => (
          <button
            key={idx}
            className="px-4 py-2 rounded-xl font-chinese text-lg font-semibold bg-white border-2 border-ink-200 text-ink-700 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700 transition-all duration-150 cursor-pointer active:scale-95"
            onClick={() => placeWord(word)}
          >
            {word}
          </button>
        ))}
      </div>

      {/* Check button */}
      <button
        className={`w-full py-3 rounded-xl font-semibold text-lg transition-all duration-150 ${
          !allPlaced || answered
            ? 'bg-ink-100 text-ink-300 cursor-not-allowed'
            : 'bg-blue-600 text-white hover:bg-blue-700 active:scale-95'
        }`}
        onClick={checkAnswer}
        disabled={!allPlaced || answered}
      >
        {answered ? (isCorrect ? '✅ Correct!' : '❌ Incorrect') : 'Check Answer'}
      </button>

      {/* Hint shown after wrong */}
      {answered && !isCorrect && (
        <div className="card p-4 border-2 border-red-200 bg-red-50">
          <div className="text-sm font-semibold text-red-700 mb-1">💡 Hint</div>
          <div className="text-sm text-red-600">{q.hint}</div>
          <div className="text-sm text-ink-600 mt-2">
            Correct order:{' '}
            <span className="font-chinese font-semibold text-emerald-700">
              {q.correct}
            </span>
          </div>
        </div>
      )}

      {/* Next button (only on wrong) */}
      {answered && !isCorrect && (
        <button className="btn-primary w-full" onClick={handleNext}>
          {current + 1 >= QUESTIONS_PER_ROUND ? '📊 See Results' : 'Next →'}
        </button>
      )}

      {/* Progress indicator */}
      <div className="text-center text-xs text-ink-300">
        {placed.length} / {q.words.length} words placed
      </div>
    </div>
  );
}
