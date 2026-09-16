export default function ResultScreen({ score, total, onRetry, onHome, gameType }) {
  const pct = Math.round((score / total) * 100);
  const passed = pct >= 60;
  const gameLabel = {
    game1: 'Character → Pinyin',
    game2: 'Pinyin → English',
    game3: 'Grammar Fill-in',
    test: 'Full HSK 3 Test',
  }[gameType] || 'Test';

  return (
    <div className="flex flex-col items-center gap-8 py-12 px-6 animate-[fadeIn_0.4s_ease-out]">
      {/* Score circle */}
      <div className="relative flex items-center justify-center w-48 h-48">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
          <circle
            cx="60" cy="60" r="52"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="12"
          />
          <circle
            cx="60" cy="60" r="52"
            fill="none"
            stroke={passed ? '#10b981' : '#ef4444'}
            strokeWidth="12"
            strokeDasharray={`${2 * Math.PI * 52}`}
            strokeDashoffset={`${2 * Math.PI * 52 * (1 - pct / 100)}`}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`text-5xl font-extrabold ${passed ? 'text-emerald-600' : 'text-red-600'}`}>
            {pct}%
          </span>
          <span className="text-ink-400 text-sm mt-1">{score}/{total}</span>
        </div>
      </div>

      {/* Result badge */}
      <div className={`px-6 py-3 rounded-2xl text-xl font-bold tracking-wide ${
        passed
          ? 'bg-emerald-50 text-emerald-700 border-2 border-emerald-200'
          : 'bg-red-50 text-red-700 border-2 border-red-200'
      }`}>
        {passed ? '🎉 PASS' : '📚 KEEP STUDYING'}
      </div>

      {/* Detail */}
      <div className="card w-full max-w-sm p-6 space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-ink-500 font-medium">Game</span>
          <span className="font-semibold text-ink-800">{gameLabel}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-ink-500 font-medium">Score</span>
          <span className="font-semibold text-ink-800">{score} / {total}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-ink-500 font-medium">Pass Standard</span>
          <span className="font-semibold text-ink-800">60%</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-ink-500 font-medium">Result</span>
          <span className={`font-bold ${passed ? 'text-emerald-600' : 'text-red-600'}`}>
            {passed ? 'Passed ✓' : 'Not Yet'}
          </span>
        </div>
      </div>

      {/* Message */}
      <p className="text-center text-ink-500 text-sm max-w-xs leading-relaxed">
        {passed
          ? `Great work! You've demonstrated solid ${gameLabel} skills. Keep it up!`
          : `Keep practicing! Review the HSK 3 vocabulary and grammar, then try again.`}
      </p>

      {/* Actions */}
      <div className="flex gap-4 w-full max-w-sm">
        <button
          onClick={onRetry}
          className="btn-secondary flex-1"
        >
          🔄 Try Again
        </button>
        <button
          onClick={onHome}
          className="btn-primary flex-1"
        >
          🏠 Home
        </button>
      </div>
    </div>
  );
}
