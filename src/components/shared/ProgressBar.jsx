export default function ProgressBar({ current, total }) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="w-full">
      <div className="flex justify-between text-sm text-ink-500 mb-1.5">
        <span className="font-medium text-ink-600">Progress</span>
        <span className="font-semibold text-ink-700">{current} / {total}</span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
