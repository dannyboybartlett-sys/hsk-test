import Game1 from '../game1/Game1';
import Game2 from '../game2/Game2';
import Game3 from '../game3/Game3';
import Game4 from '../game4/Game4';
import Game5 from '../game5/Game5';
import Game6 from '../game6/Game6';
import TestMode from '../../pages/TestMode';

const GAME_MAP = {
  '1': Game1,
  '2': Game2,
  '3': Game3,
  '4': Game4,
  '5': Game5,
  '6': Game6,
};

const GAME_TITLES = {
  '1': { hsk3: '🔤 Character → Pinyin', hsk4: '🔤 Character → Pinyin' },
  '2': { hsk3: '📖 Pinyin → English', hsk4: '📖 Pinyin → English' },
  '3': { hsk3: '🏗️ Grammar Fill-in', hsk4: '🏗️ Grammar Fill-in' },
  '4': { hsk3: '🧩 Arrange Sentence', hsk4: '🧩 Arrange Sentence' },
  '5': { hsk3: '🎧 Listen & Choose', hsk4: '🎧 Listen & Choose' },
  '6': { hsk3: '❌ Spot the Error', hsk4: '❌ Spot the Error' },
};

export default function GamePage({ gameId, level, onHome }) {
  // Full test
  if (gameId === 'test') {
    return <TestMode level={level} onHome={onHome} />;
  }

  const GameComponent = GAME_MAP[gameId];
  const titleEntry = GAME_TITLES[gameId];
  const title = titleEntry?.[`hsk${level}`] ?? `Game ${gameId}`;

  if (!GameComponent) {
    return (
      <div className="min-h-screen flex items-center justify-center text-ink-400">
        Game not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ink-50">
      {/* Top bar */}
      <div className="bg-white border-b border-ink-200 px-4 py-3 flex items-center gap-3 sticky top-0 z-10">
        <button
          onClick={onHome}
          className="text-2xl text-ink-400 hover:text-ink-700 transition-colors"
          aria-label="Back"
        >
          ←
        </button>
        <div className="flex items-center gap-2">
          <span
            className={`text-xs font-bold px-2 py-0.5 rounded-full ${
              level === '3'
                ? 'bg-red-100 text-red-600'
                : 'bg-emerald-100 text-emerald-700'
            }`}
          >
            HSK {level}
          </span>
          <span className="font-bold text-ink-700">{title}</span>
        </div>
      </div>

      {/* Game */}
      <GameComponent onHome={onHome} hskLevel={level} />
    </div>
  );
}
