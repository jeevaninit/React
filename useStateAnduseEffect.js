import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  
  const styles={
    backgroundColor:'Blue',
    margin:'10px',
    padding:'10px',
    color:'white',
    borderRadius:'50px'
  }

  useEffect(() => {
    alert(`You clicked  ${count}times`);
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)} style={styles}>
        Increment Count
      </button>

      <button onClick={() => setCount(count - 1)} style={styles}>
        Decrement Count
      </button>
    </div>
  );
}
export default MyComponent