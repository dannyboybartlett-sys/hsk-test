import { Link } from 'react-router-dom';

const levels = [
  {
    id: 'hsk3',
    label: 'HSK 3',
    badge: '三级',
    subtitle: '300 New Words',
    emoji: '🔤',
    gradient: 'from-red-600 via-red-500 to-rose-500',
    bgLight: 'bg-red-50',
    borderLight: 'border-red-200',
    stats: [
      { label: 'Vocabulary', value: '300 words' },
      { label: 'Grammar', value: '36 patterns' },
      { label: 'Games', value: '6 activities' },
      { label: 'Pass mark', value: '60%' },
    ],
    description:
      'Everyday conversations, basic travel Chinese, and foundational grammar structures including 把, 被, and comparison sentences.',
    route: '/hsk3',
    cta: 'Start HSK 3 →',
  },
  {
    id: 'hsk4',
    label: 'HSK 4',
    badge: '四级',
    subtitle: '1,000 New Words',
    emoji: '📗',
    gradient: 'from-emerald-600 via-emerald-500 to-teal-500',
    bgLight: 'bg-emerald-50',
    borderLight: 'border-emerald-200',
    stats: [
      { label: 'Vocabulary', value: '1,000 words' },
      { label: 'Grammar', value: '80+ patterns' },
      { label: 'Games', value: '6 activities' },
      { label: 'Pass mark', value: '60%' },
    ],
    description:
      'Complex sentence structures, nuanced expressions, double negation, pivot sentences, and the full range of comparison patterns.',
    route: '/hsk4',
    cta: 'Start HSK 4 →',
  },
];

function LevelCard({ level, index }) {
  return (
    <div
      className={`card overflow-hidden flex flex-col ${index === 0 ? 'order-1' : 'order-2 sm:order-2'}`}
    >
      {/* Color banner */}
      <div className={`bg-gradient-to-br ${level.gradient} text-white px-6 py-8`}>
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-white/20 rounded-full px-3 py-1 text-xs font-medium mb-3">
              {level.badge}
            </div>
            <div className="text-5xl mb-2">{level.emoji}</div>
            <h2 className="text-3xl font-extrabold tracking-tight">{level.label}</h2>
            <p className="text-white/80 text-sm mt-0.5">{level.subtitle}</p>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-2 mt-4">
          {level.stats.map((s) => (
            <div key={s.label} className="bg-white/15 rounded-lg px-3 py-2 text-center">
              <div className="text-lg font-bold">{s.value}</div>
              <div className="text-white/70 text-xs">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 px-6 py-5">
        <p className="text-ink-600 text-sm leading-relaxed flex-1">{level.description}</p>
        <Link
          to={level.route}
          className={`mt-5 w-full btn text-center font-bold py-3 rounded-xl text-white bg-gradient-to-r ${level.gradient} hover:opacity-90 transition-opacity`}
        >
          {level.cta}
        </Link>
      </div>
    </div>
  );
}

export default function LevelSelect() {
  return (
    <div className="min-h-screen bg-ink-50 flex flex-col">
      {/* Hero title */}
      <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white">
        <div className="max-w-2xl mx-auto px-6 pt-14 pb-10 text-center">
          <div className="text-5xl mb-4">🇨🇳</div>
          <h1 className="text-4xl font-extrabold leading-tight mb-2">
            <span className="font-chinese">Dan的简单的单词</span>
          </h1>
          <p className="text-slate-300 text-lg mb-1">Chinese Proficiency Test</p>
          <p className="text-slate-400 text-sm">Choose your level below to start practicing</p>
        </div>
      </div>

      {/* Cards */}
      <div className="flex-1 flex items-start justify-center px-6 py-12">
        <div className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-6">
          {levels.map((level, i) => (
            <LevelCard key={level.id} level={level} index={i} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center pb-8 text-xs text-ink-300">
        HSK 3.0 aligned · New vocabulary · Instant feedback · Auto-save scores
      </div>
    </div>
  );
}
