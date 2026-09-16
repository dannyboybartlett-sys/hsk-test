import { useEffect } from 'react';
import { HashRouter, useNavigate, useLocation } from 'react-router-dom';
import Home from './components/home/Home';
import LevelSelect from './components/level-select/LevelSelect';
import GamePage from './components/gamePage/GamePage';
import TestMode from './pages/TestMode';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppRouter() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleHome = () => navigate('/');

  // Extract game id from pathname like /hsk3/game/1 or /hsk4/game/1
  const getGameId = () => {
    const parts = pathname.split('/').filter(Boolean);
    if (parts.length >= 2 && parts[1] === 'game') return parts[2];
    return null;
  };

  const getLevel = () => {
    const parts = pathname.split('/').filter(Boolean);
    if (parts[0] === 'hsk3') return '3';
    if (parts[0] === 'hsk4') return '4';
    return null;
  };

  const gameId = getGameId();
  const level = getLevel();

  if (gameId) {
    return <GamePage gameId={gameId} level={level} onHome={handleHome} />;
  }

  if (pathname === '/hsk4/test') {
    return <TestMode level="4" onHome={handleHome} />;
  }

  if (pathname === '/hsk3/test') {
    return <TestMode level="3" onHome={handleHome} />;
  }

  if (pathname === '/hsk4') {
    return <Home level="4" onHome={handleHome} />;
  }

  if (pathname === '/hsk3') {
    return <Home level="3" onHome={handleHome} />;
  }

  // Default: / -> LevelSelect
  return <LevelSelect />;
}

export default function App() {
  return (
    <HashRouter basename="/hsk-test">
      <ScrollToTop />
      <AppRouter />
    </HashRouter>
  );
}
