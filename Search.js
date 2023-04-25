import React, { useState } from "react";
import DropdownList from "./Tabs";

function App() {
  const [showDropdown, setShowDropdown] = useState(false);

  function handleInputFocus() {
    setShowDropdown(true);
  }

  function handleInputBlur() {
    setShowDropdown(false);
  }

  return (
    <div className="App">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        {showDropdown && <DropdownList />}
      </div>
    </div>
  );
}

export default App;
