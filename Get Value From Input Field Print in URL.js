import React, { useRef } from 'react'

const SearchWithUseRef = () => {

  const searchInputRef = useRef(null);

  const handleSearchResults = () => {
    const results = searchInputRef.current.value;
    console.log(results);
    window.location.href = `https://example.com/search?query=${encodeURIComponent(results)}`;
  }

  return (
    <div>
      <input type='text' ref={searchInputRef} />
      <button onClick={handleSearchResults}>Click Here</button>
    </div>
  )
}

export default SearchWithUseRef;
