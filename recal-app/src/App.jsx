import React from 'react';
import HomePage from './components/HomePage';
import CalendarPage from './components/CalendarPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
    </Router>
  );
};

export default App;