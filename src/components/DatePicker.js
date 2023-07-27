import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './TicketConfirmPage.css';
import { useDispatch } from 'react-redux';
import { setDate } from './actions'; // Import your action



const DateSelector = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const dispatch = useDispatch();

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log("date - " + date);
    const dateObj = new Date(date);

    // converting date object to string
    const selectedDate = dateObj.toLocaleDateString();
    dispatch(setDate(selectedDate)); // Dispatch the action to update Redux state
  };

  return (
    <span className="date-time-input">
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd-MM-yyyy"
        placeholderText="select date"
      />
    </span>
  );
};

export default DateSelector;