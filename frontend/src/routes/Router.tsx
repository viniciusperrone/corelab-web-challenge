import { Routes, Route } from 'react-router-dom';
import { Create } from '../pages/Create';
import { Filter } from '../pages/Filter';
import { Home } from '../pages/Home';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search/:slug" element={<Home />} />
      <Route path="/filter" element={<Filter />} />
      <Route path="/vehicle/create" element={<Create />} />
    </Routes>
  );
}
