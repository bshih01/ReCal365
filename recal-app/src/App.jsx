import React, { useState } from 'react';
import HomePage from './components/HomePage';
import CalendarComponent from './components/CalendarPage';
import EventModal from "./components/EventCalendar";
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState({});

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setIsModalOpen(true);
  };

  const handleSaveEvent = (event) => {
    setEvents({ ...events, [event.date.toDateString()]: event });
  };

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/calendar" element={<CalendarComponent onDateSelect={handleDateSelect} />} />
            </Routes>
        </Router>
      </ThemeProvider>

      <div style={{ textAlign: "center" }}>
        <h1>ReCal365</h1>
        <EventModal
          isOpen={isModalOpen}
          selectedDate={selectedDate}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveEvent}
        />
        <div>
          <h2>Saved Events</h2>
          {Object.entries(events).map(([date, event]) => (
            <div key={date}>
              <h3>{date}</h3>
              <p>{event.text}</p>
              <div>
                {event.images.map((img, index) => (
                  <img
                    key={index}
                    src={URL.createObjectURL(img)}
                    alt="Uploaded"
                    style={{ width: "100px", height: "100px" }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );

};

export default App;