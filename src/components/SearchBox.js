import React, { useState } from 'react';
import {Link} from "react-router-dom";


function SearchBox() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform search or other actions with the search term
    console.log(searchTerm);
    // Reset the search term
    setSearchTerm('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className='input'
        type="text"
        placeholder="Search Movies..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button className='search_button' type="submit">
        <Link to="/search-results/:title" className='search_text'>
          Search
        </Link>
      </button>
    </form>
  );
}

export default SearchBox;