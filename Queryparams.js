import React, { useState, useEffect } from 'react';

function MyQueryParams() {
  const [search, setSearch] = useState('');

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const searchQuery = queryParams.get('search');
    setSearch(searchQuery || '');
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const queryParams = new URLSearchParams({ search });
    window.location.search = queryParams.toString();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
export default MyQueryParams;
