import React, { useState } from 'react'
import DropdownList from './Tabs';

const SearchProject = () => {

    const [showDropdown, setShowDropdown] = useState(false);

    function handleInputFocus() {
        setShowDropdown(true);
      }

      function handleInputBlur() {
        setShowDropdown(false);
      }


  return (
    <div>
        <h1>SearchProject</h1>
        <input type="search" placeholder='Search' onFocus={handleInputFocus}
          onBlur={handleInputBlur} />

        {showDropdown && <DropdownList />}


    </div>
  )
}

export default SearchProject