import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<BlogPage />} />
    </Routes>
  );
}