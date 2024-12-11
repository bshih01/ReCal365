// src/components/Calendar.js
import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

const CalendarComponent = ({ onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onDateSelect(date); // Notify the parent about the selected date
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Full viewport height for centering
        flexDirection: "column", // Stack items vertically
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Select a Date</h2>
      <Calendar
        value={selectedDate}
        onChange={handleDateChange} // Trigger when the date is selected
      />
    </div>
  );
};

export default CalendarComponent;
