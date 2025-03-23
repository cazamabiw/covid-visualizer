// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import CountryTrend from './pages/CountryTrend';
import Vaccination from './pages/Vaccination';

function App() {
  return (
    <Router>
      <div>
        {/* Bootstrap Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">COVID-19 Dashboard</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link">Global View</Link>
                </li>
                <li className="nav-item">
                  <Link to="/country" className="nav-link">Country Trend</Link>
                </li>
                <li className="nav-item">
                  <Link to="/vaccination" className="nav-link">Vaccination</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <div className="container py-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/country" element={<CountryTrend />} />
            <Route path="/vaccination" element={<Vaccination />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
