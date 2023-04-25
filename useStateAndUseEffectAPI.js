import React, { useState, useEffect } from 'react';

function UserEffectAPI() {
  const [data, setData] = useState([]);

  useEffect(() => {
    //address of the api
    fetch('https://jsonplaceholder.typicode.com/posts')
    //create json object
      .then(response => response.json())
      //return json object in to state variable
      .then(data => setData(data));
  }, []);

  return (
    <div>
        {/* mapping api return data */}
      {data.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
export default UserEffectAPI