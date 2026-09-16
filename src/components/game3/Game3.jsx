import { useState, useEffect, useCallback } from 'react';
import { grammarQuizBank } from '../../data/quizBank';
import { hsk4GrammarBank } from '../../data/quizBankHsk4';
import useGameStore from '../../store/useGameStore';
import ProgressBar from '../shared/ProgressBar';
import ResultScreen from '../shared/ResultScreen';

function buildQuestions(level) {
  const bank = level === '4' ? hsk4GrammarBank : grammarQuizBank;
  return [...bank]
    .sort(() => Math.random() - 0.5)
    .slice(0, 30);
}

const QUESTIONS_PER_ROUND = 30;

export default function Game3({ onHome, hskLevel = '3' }) {
  const recordGame3 = useGameStore((s) => s.recordGame3);
  const [questions] = useState(() => buildQuestions(hskLevel));
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [flash, setFlash] = useState(null);

  const q = questions[current];
  const isCorrect = selected !== null && selected === q.answer;
  const answered = selected !== null;

  const handleSelect = useCallback(
    (idx) => {
      if (answered) return;
      setSelected(idx);
      if (idx === q.answer) setScore((s) => s + 1);
      setFlash(idx === q.answer ? 'correct' : 'wrong');
      setTimeout(() => setFlash(null), 400);
      if (idx === q.answer) {
        setTimeout(() => {
          setCurrent((prev) => {
            if (prev + 1 >= QUESTIONS_PER_ROUND) {
              recordGame3(score + 1, QUESTIONS_PER_ROUND);
              setShowResult(true);
              return prev;
            }
            return prev + 1;
          });
          setSelected(null);
        }, 900);
      }
    },
    [answered, q]
  );

  const handleNext = useCallback(() => {
    const isWrong = selected !== null && selected !== q.answer;
    const finalScore = isWrong ? score + 1 : score;
    if (current + 1 >= QUESTIONS_PER_ROUND) {
      recordGame3(finalScore, QUESTIONS_PER_ROUND);
      setShowResult(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
    }
  }, [current, score, selected, q]);

  useEffect(() => {
    if (showResult) {
      recordGame3(score, QUESTIONS_PER_ROUND);
    }
  }, [showResult, score, recordGame3]);

  // Auto-advance only on correct answers; wrong waits for manual click

  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (!answered) {
        const num = parseInt(e.key);
        if (num >= 1 && num <= 4) handleSelect(num - 1);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [answered, handleSelect]);

  if (showResult) {
    return (
      <>
        {flash && (
          <div className={`fixed inset-0 z-50 pointer-events-none transition-opacity duration-300 ${flash === 'correct' ? 'bg-emerald-500' : 'bg-red-500'} opacity-20`} />
        )}
      <ResultScreen
        score={score}
        total={QUESTIONS_PER_ROUND}
        onRetry={() => window.location.reload()}
        onHome={onHome}
        gameType="game3"
      />
      </>
    );
  }

  // Render sentence with blank highlighted
  const parts = q.sentence.split('_____');

  return (
    <div className="flex flex-col gap-6 max-w-md mx-auto py-8 px-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-ink-800">Game 3: Grammar Fill-in</h2>
          <p className="text-sm text-ink-400">Choose the word that completes the sentence</p>
        </div>
        <div className="text-right">
          <span className="text-2xl font-bold text-red-600">{score}</span>
          <span className="text-ink-400 text-sm"> / {QUESTIONS_PER_ROUND}</span>
        </div>
      </div>

      <ProgressBar current={current + 1} total={QUESTIONS_PER_ROUND} />

      {/* Grammar badge */}
      <div className="flex items-center gap-2">
        <span className="stat-badge bg-teal-50 text-teal-700 border border-teal-200">
          🏗️ Pattern #{q.id}
        </span>
        <span className="text-xs text-ink-400 capitalize">{q.pattern}</span>
      </div>

      {/* Sentence card */}
      <div className="card p-8 bg-gradient-to-br from-white to-ink-50">
        <div className="text-sm text-ink-400 mb-4">Fill in the blank:</div>
        <div className="text-xl leading-relaxed text-ink-800 font-medium">
          {parts[0]}
          <span className="text-red-400 font-bold tracking-widest mx-1 inline-block align-middle">
            {'_'.repeat(Math.max(q.options[q.answer].length * 2, 4))}
          </span>
          {parts[1]}
        </div>
      </div>

      {/* Options */}
      <div className="space-y-3">
        {q.options.map((opt, idx) => {
          let cls = 'option-btn';
          if (answered) {
            cls += ' disabled';
            if (idx === q.answer) cls += ' correct';
            else if (idx === selected) cls += ' wrong';
          }
          return (
            <button key={idx} className={cls} onClick={() => handleSelect(idx)}>
              <span className="text-xs text-ink-400 mr-2">{idx + 1}.</span>
              <span className="font-semibold text-red-600">{opt}</span>
            </button>
          );
        })}
      </div>

      {/* Explanation (shown after answering) */}
      {answered && (
        <div className="card p-4 border-2 border-amber-200 bg-amber-50">
          <div className="flex items-start gap-3">
            <span className="text-xl">💡</span>
            <div>
              <div className="font-bold text-amber-700 text-sm mb-1">Explanation</div>
              <div className="text-sm text-ink-700 leading-relaxed">{q.explanation}</div>
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
        <p className="text-center text-xs text-ink-300">Press 1-4 to select • Auto-advances in 0.9s</p>
      )}
    </div>
  );
}
