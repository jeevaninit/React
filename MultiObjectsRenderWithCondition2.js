import React from 'react';

function MultiObjectsRenderWithCondition2() {
  // Two object literals representing books
  const book1 = {
    title: 'The Hitchhiker\'s Guide to the Galaxy',
    author: 'Douglas Adams',
    year: 1979,
    genres: ['science fiction', 'comedy']
  };
  const book2 = {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    genres: ['drama', 'coming-of-age']
  };
  
  // Condition to check which book was published more recently
  const newerBook = book1.year > book2.year ? book1 : book2;

  // Render output based on condition
  return (
    <div>
      <p>The newer book is:</p>
      <p>{newerBook.title} by {newerBook.author}, published in {newerBook.year}</p>
      {newerBook === book1 && (
        <p>This book is a {newerBook.genres.join(' and ')} book.</p>
      )}
      {newerBook === book2 && (
        <p>This book is a {newerBook.genres.join(' and ')} book.</p>
      )}
    </div>
  );
}

export default MultiObjectsRenderWithCondition2;
