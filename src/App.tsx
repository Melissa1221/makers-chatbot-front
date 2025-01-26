import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Chat } from './pages/Chat';
import { CategoryPage } from './pages/CategoryPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/category/:categoryId" element={<CategoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
