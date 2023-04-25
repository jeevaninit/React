//Filtering Data From API Record list

import React, { useState, useEffect } from 'react';
import axios from 'axios'; //npm install axios

function FilterDataUsingAxios() {

  const [data, setData] = useState([]);

  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await axios.get('https://jsonplaceholder.typicode.com/users');
    setData(result.data);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Filter Data From Axios</h1>
      <hr/>
      <input type="text" value={filter} onChange={handleFilterChange} placeholder="Filter Data from Existing List..."/>

      {filteredData.map((item) => (
        <p>
        <div key={item.id}>{item.name}</div>
        </p>
      ))}
    </div>
  );
}

export default FilterDataUsingAxios;