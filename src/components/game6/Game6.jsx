import { useState, useCallback } from 'react';
import { validErrorBank } from '../../data/errorBank';
import { validErrorBankHsk4 } from '../../data/errorBankHsk4';
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
  const bank = level === '4' ? validErrorBankHsk4 : validErrorBank;
  const shuffled = [...bank].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 30).map((item) => {
    // Build 4 options: 1 error + 3 correct, shuffled
    const options = [
      { text: item.errorSentence, isError: true, explanation: item.errorExplanation },
      ...item.correctAlternatives.slice(0, 3).map((text) => ({
        text,
        isError: false,
        explanation: null,
      })),
    ];
    const shuffledOptions = shuffle(options);
    const correctIndex = shuffledOptions.findIndex((o) => o.isError);
    return {
      ...item,
      options: shuffledOptions,
      correctIndex,
    };
  });
}

const QUESTIONS_PER_ROUND = 30;

export default function Game6({ onHome, hskLevel = '3' }) {
  const recordGame6 = useGameStore((s) => s.recordGame6);
  const [questions] = useState(() => buildQuestions(hskLevel));
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [flash, setFlash] = useState(null);

  const q = questions[current];
  const answered = selected !== null;
  const isCorrect = answered && q.options[selected].isError;

  const handleSelect = useCallback(
    (idx) => {
      if (answered) return;
      const correct = q.options[idx].isError;
      setSelected(idx);
      if (correct) setScore((s) => s + 1);
      setFlash(correct ? 'correct' : 'wrong');
      setTimeout(() => setFlash(null), 400);
      if (correct) {
        setTimeout(() => {
          if (current + 1 >= QUESTIONS_PER_ROUND) {
            recordGame6(score + 1, QUESTIONS_PER_ROUND);
            setShowResult(true);
          } else {
            setCurrent((prev) => prev + 1);
            setSelected(null);
          }
        }, 900);
      }
    },
    [answered, q, current, score, recordGame6]
  );

  const handleNext = useCallback(() => {
    const correct = q.options[selected].isError;
    const finalScore = correct ? score : score + 1;
    if (current + 1 >= QUESTIONS_PER_ROUND) {
      recordGame6(finalScore, QUESTIONS_PER_ROUND);
      setShowResult(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
    }
  }, [current, score, selected, q, recordGame6]);

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
          gameType="game6"
        />
      </>
    );
  }

  return (
    <div className="flex flex-col gap-5 max-w-lg mx-auto py-8 px-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-ink-800">❌ Spot the Error</h2>
          <p className="text-sm text-ink-400">Find the grammatically incorrect sentence</p>
        </div>
        <div className="text-right">
          <span className="text-2xl font-bold text-red-600">{score}</span>
          <span className="text-ink-400 text-sm"> / {QUESTIONS_PER_ROUND}</span>
        </div>
      </div>

      <ProgressBar current={current + 1} total={QUESTIONS_PER_ROUND} />

      {/* Instruction */}
      <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-2.5 text-sm text-red-700 font-medium text-center">
        🔍 Find the sentence that has a grammatical error
      </div>

      {/* Options — 4 sentence cards */}
      <div className="space-y-3">
        {q.options.map((opt, idx) => {
          let cls = 'w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-150 cursor-pointer font-chinese text-base leading-relaxed';
          if (answered) {
            cls += ' disabled';
            if (opt.isError) cls += ' border-red-500 bg-red-50';
            else if (idx === selected) cls += ' border-emerald-300 bg-emerald-50';
            else cls += ' border-ink-200 opacity-60';
          } else {
            cls += ' border-ink-200 bg-white hover:border-red-400 hover:bg-red-50 active:scale-[0.98]';
          }

          return (
            <button key={idx} className={cls} onClick={() => handleSelect(idx)}>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full border-2 border-current flex items-center justify-center text-xs font-bold mt-0.5">
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className="flex-1">{opt.text}</span>
              </div>
              {answered && opt.isError && opt.explanation && (
                <div className="mt-2 ml-10 text-sm text-red-600 leading-relaxed">
                  💡 {opt.explanation}
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Feedback */}
      {answered && (
        <div className={`card p-4 border-2 ${
          isCorrect ? 'border-emerald-300 bg-emerald-50' : 'border-red-300 bg-red-50'
        }`}>
          <div className="flex items-start gap-3">
            <span className="text-2xl">{isCorrect ? '✅' : '❌'}</span>
            <div>
              <div className={`font-bold ${isCorrect ? 'text-emerald-700' : 'text-red-700'}`}>
                {isCorrect ? 'Correct! You found the error!' : 'Incorrect'}
              </div>
              {!isCorrect && q.options[q.correctIndex].explanation && (
                <div className="text-sm text-ink-600 mt-1 leading-relaxed">
                  The error is: <span className="font-semibold text-red-700">{q.options[q.correctIndex].text}</span>
                  <br />
                  {q.options[q.correctIndex].explanation}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      {answered && (
        <button className="btn-primary w-full" onClick={handleNext}>
          {current + 1 >= QUESTIONS_PER_ROUND ? '📊 See Results' : 'Next →'}
        </button>
      )}

      {!answered && (
        <p className="text-center text-xs text-ink-300">Press A/B/C/D to select • Auto-advances on correct</p>
      )}
    </div>
  );
}
