// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import CountryTrend from './pages/CountryTrend';

function App() {
  return (
    <Router>
      <div className="container py-4">
        <h1 className="mb-4">COVID-19 Dashboard</h1>
        <nav className="mb-4">
          <Link to="/" className="btn btn-primary me-2">Global View</Link>
          <Link to="/country" className="btn btn-secondary">Country Trend</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/country" element={<CountryTrend />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
