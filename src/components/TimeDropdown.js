import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setTime } from './actions';

const TimeDropdown = () => {
  // State to keep track of the selected option
  const [selectedOption, setSelectedOption] = useState('');
  const dispatch = useDispatch();

  // Array of options for the dropdown
  const options = ['9 AM', '12 PM', '6 PM', '9 PM'];

  // Event handler for handling changes in the selected option
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    dispatch(setTime(event.target.value));
  };

  return (
    <div className="date-time-input">
      {/* <h3>Time : </h3> */}
      <select value={selectedOption} onChange={handleChange}>
        <option value="" style={{
           outline: "none"
        }}>select time</option> {/* Default blank option */}
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {/* <p>Selected option: {selectedOption}</p> */}
    </div>
  );
};

export default TimeDropdown;
