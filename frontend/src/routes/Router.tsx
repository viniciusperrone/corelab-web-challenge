import { Routes, Route } from 'react-router-dom';
import { Filter } from '../pages/Filter';
import { Home } from '../pages/Home';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/filter" element={<Filter />} />
    </Routes>
  );
}
