import React, { useState, useEffect } from 'react';

function Example() {
  const [inputValue, setInputValue] = useState('');
  
  function handleInputChange(event) {
    setInputValue(event.target.value);
  }
  
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set('inputValue', inputValue);
    const newUrl = window.location.protocol + '//' + window.location.host + window.location.pathname + '?' + queryParams.toString();
    window.history.pushState(null, '', newUrl);
  }, [inputValue]);
  
  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      
      {/* rest of your component code... */}
    </div>
  );
}
