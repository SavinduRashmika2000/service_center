import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Placeholder for dashboard routes later */}
        {/* <Route path="/dashboard/*" element={<DashboardLayout />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
