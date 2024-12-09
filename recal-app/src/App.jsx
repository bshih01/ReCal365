import React from 'react';
import HomePage from './components/HomePage';
import CalendarPage from './components/CalendarPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/calendar" element={<CalendarPage />} />
          </Routes>
      </Router>
      </ThemeProvider>
  );
};

export default App;