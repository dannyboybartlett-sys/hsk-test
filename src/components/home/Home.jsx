import { Link } from 'react-router-dom';
import useGameStore from '../../store/useGameStore';

function StatCard({ label, value, sub, color }) {
  return (
    <div className={`card p-4 border-t-4 ${color}`}>
      <div className="text-2xl font-bold text-ink-800">{value ?? '—'}</div>
      <div className="text-sm font-medium text-ink-600 mt-1">{label}</div>
      {sub && <div className="text-xs text-ink-400 mt-0.5">{sub}</div>}
    </div>
  );
}

function GameCard({ to, emoji, title, desc, color, latest, wide }) {
  return (
    <Link
      to={to}
      className={`btn-card group${wide ? ' sm:col-span-2' : ''}`}
    >
      <div className={`w-16 h-16 rounded-2xl ${color} flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-200`}>
        {emoji}
      </div>
      <div className="text-center">
        <div className="font-bold text-ink-800 text-lg">{title}</div>
        <div className="text-sm text-ink-400 mt-1">{desc}</div>
        {latest && (
          <div className="mt-2 text-xs text-ink-400">
            Last: <span className={latest.pass ? 'text-emerald-600' : 'text-red-500'}>
              {latest.score}/{latest.total}
            </span>
          </div>
        )}
      </div>
      <div className="text-xs text-ink-300 group-hover:text-red-400 transition-colors">Start →</div>
    </Link>
  );
}

const LEVEL_CONFIG = {
  '3': {
    badge: 'HSK 3 — 300 New Words • 36 Grammar Structures',
    title: 'HSK 3 Test',
    desc: 'Practice vocabulary matching and grammar fill-in exercises.',
    passDesc: 'to prove your HSK 3 level.',
    gradient: 'from-red-600 via-red-500 to-rose-500',
    textClass: 'text-red-200',
    wordCount: '300',
    grammarCount: '36',
  },
  '4': {
    badge: 'HSK 4 — 1,000 New Words • 80+ Grammar Structures',
    title: 'HSK 4 Test',
    desc: 'Advanced vocabulary, complex sentences, and nuanced grammar patterns.',
    passDesc: 'to prove your HSK 4 level.',
    gradient: 'from-emerald-600 via-emerald-500 to-teal-500',
    textClass: 'text-emerald-200',
    wordCount: '1,000',
    grammarCount: '80+',
  },
};

export default function Home({ level = '3', onHome }) {
  const { userName, game1History, game2History, game3History, game4History, game5History, game6History, testHistory } = useGameStore();
  const cfg = LEVEL_CONFIG[level];

  const lastGame1 = game1History[game1History.length - 1];
  const lastGame2 = game2History[game2History.length - 1];
  const lastGame3 = game3History[game3History.length - 1];
  const lastGame4 = game4History[game4History.length - 1];
  const lastGame5 = game5History[game5History.length - 1];
  const lastGame6 = game6History[game6History.length - 1];
  const lastTest = testHistory[testHistory.length - 1];

  const hskPassCount = [
    lastGame1?.pass,
    lastGame2?.pass,
    lastGame3?.pass,
    lastGame4?.pass,
    lastGame5?.pass,
    lastGame6?.pass,
    lastTest?.pass,
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-ink-50">
      {/* ── Hero ── */}
      <div className={`bg-gradient-to-br ${cfg.gradient} text-white`}>
        <div className="max-w-2xl mx-auto px-6 py-14">
          <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            🎯 {cfg.badge}
          </div>
          <h1 className="text-4xl font-extrabold leading-tight mb-4">
            <span className="font-chinese">Dan的简单的单词</span>
            <br />
            <span className={cfg.textClass}>{cfg.title}</span>
          </h1>
          <p className={`${cfg.textClass.replace('200','100')} text-lg leading-relaxed mb-8 max-w-lg`}>
            {cfg.desc}
            Pass at <strong className="text-white">60%</strong> {cfg.passDesc}
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3">
            <StatCard
              label="Games Completed"
              value={game1History.length + game2History.length + game3History.length}
              sub="total sessions"
              color="border-t-white"
            />
            <StatCard
              label="Best Score"
              value={lastTest ? `${Math.round((lastTest.score / lastTest.total) * 100)}%` : null}
              sub={lastTest ? `Test ${lastTest.score}/${lastTest.total}` : 'No test yet'}
              color="border-t-white"
            />
            <StatCard
              label="Games Passed"
              value={hskPassCount}
              sub={`out of 7 activities`}
              color="border-t-white"
            />
          </div>
        </div>
      </div>

      {/* ── Game Selection ── */}
      <div className="max-w-2xl mx-auto px-6 py-12">
        <h2 className="text-xl font-bold text-ink-800 mb-6">Choose Your Practice</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <GameCard
            to={`/hsk${level}/game/1`}
            emoji="🔤"
            title="Character → Pinyin"
            desc="Match Chinese characters with correct pinyin"
            color="bg-red-50"
            latest={lastGame1}
          />
          <GameCard
            to={`/hsk${level}/game/2`}
            emoji="📖"
            title="Pinyin → English"
            desc="Match pinyin with English definitions"
            color="bg-amber-50"
            latest={lastGame2}
          />
          <GameCard
            to={`/hsk${level}/game/3`}
            emoji="🏗️"
            title="Grammar Fill-in"
            desc="Complete sentences with the right word"
            color="bg-teal-50"
            latest={lastGame3}
          />
          <GameCard
            to={`/hsk${level}/game/4`}
            emoji="🧩"
            title="Arrange Sentence"
            desc="Click words to build the correct Chinese sentence"
            color="bg-indigo-50"
            latest={lastGame4}
          />
          <GameCard
            to={`/hsk${level}/game/5`}
            emoji="🎧"
            title="Listen & Choose"
            desc="Hear a word and select the matching character"
            color="bg-rose-50"
            latest={lastGame5}
          />
          <GameCard
            to={`/hsk${level}/game/6`}
            emoji="❌"
            title="Spot the Error"
            desc="Find the grammatically incorrect sentence"
            color="bg-orange-50"
            latest={lastGame6}
          />
          <GameCard
            to={`/hsk${level}/test`}
            emoji="📝"
            title="Full Test"
            desc="60 mixed questions — 15 of each type"
            color="bg-violet-50"
            latest={lastTest}
            wide
          />
        </div>

        {/* ── HSK 3 Overview ── */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-ink-800 mb-4">HSK 3 Overview</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: 'New Words', value: cfg.wordCount, icon: '📚' },
              { label: 'Total', value: level === '3' ? '~600' : '~3,200', icon: '📖' },
              { label: 'Grammar Points', value: cfg.grammarCount, icon: '🏗️' },
              { label: 'Pass Score', value: '60%', icon: '🎯' },
            ].map(({ label, value, icon }) => (
              <div key={label} className="card p-4 text-center">
                <div className="text-2xl mb-1">{icon}</div>
                <div className="text-xl font-bold text-ink-800">{value}</div>
                <div className="text-xs text-ink-400">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Recent History ── */}
        {(game1History.length > 0 || game2History.length > 0 || game3History.length > 0) && (
          <div className="mt-10">
            <h2 className="text-xl font-bold text-ink-800 mb-4">Recent Sessions</h2>
            <div className="space-y-2">
              {[...game1History].reverse().slice(0, 3).map((h, i) => (
                <div key={`g1-${i}`} className="card p-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-lg">🔤</span>
                    <span className="text-sm font-medium text-ink-600">Character → Pinyin</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`font-bold ${h.pass ? 'text-emerald-600' : 'text-red-500'}`}>
                      {h.score}/{h.total}
                    </span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${h.pass ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-600'}`}>
                      {h.pass ? 'PASS' : 'FAIL'}
                    </span>
                  </div>
                </div>
              ))}
              {[...game2History].reverse().slice(0, 2).map((h, i) => (
                <div key={`g2-${i}`} className="card p-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-lg">📖</span>
                    <span className="text-sm font-medium text-ink-600">Pinyin → English</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`font-bold ${h.pass ? 'text-emerald-600' : 'text-red-500'}`}>
                      {h.score}/{h.total}
                    </span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${h.pass ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-600'}`}>
                      {h.pass ? 'PASS' : 'FAIL'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
