import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Software from './pages/Software';
import Songwriting from './pages/Songwriting';
import GameDevelopment from './pages/GameDevelopment';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route index element={<Landing />} />
      <Route path="/software" element={<Software />} />
      <Route path="/songwriting" element={<Songwriting />} />
      <Route path="/game-development" element={<GameDevelopment />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
