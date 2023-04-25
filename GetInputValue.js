/*  */
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

function GetInputValue() {
  const [searchInput, setSearchInput] = useState('');
  const inputRef = useRef(null);

  const handleInputChange = () => {
    setSearchInput(inputRef.current.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault(); // Prevent form submission
    // Do something with the search input value, e.g. navigate to search results page
    <Link />
  };

  return (
    <div>
      <h1>Search Form</h1>
      <form onSubmit={handleSearchSubmit}>
        <label htmlFor="searchInput">Search:</label>
        <input
          type="text"
          id="searchInput"
          ref={inputRef}
          value={searchInput}
          onChange={handleInputChange}
        />
        <Link
          to={{
            pathname: '/search/searchResults',
            search: `?q=${searchInput}`,
          }}
          className="btn btn-primary"
        >
          Search
        </Link>
      </form>
    </div>
  );
}

export default GetInputValue;
