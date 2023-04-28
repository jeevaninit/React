import React, { useRef } from 'react'

const SearchWithUseRef = () => {

  const searchInputRef = useRef(null);

  const handleSearchResults=()=>{
    const results=searchInputRef.current.value;
  console.log(results);
  }

  return (
    <div>
      <input type='text' ref={searchInputRef} />
      <button onClick={handleSearchResults}>Click Here</button>
    </div>
  )
}
