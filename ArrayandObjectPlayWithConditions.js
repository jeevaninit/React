import React from 'react'

const ArrayandObjectPlayWithConditions = () => {

    const books = [
        { 
	id: 1, 
	title: "The Great Gatsby", 
	author: "John", 
	yearPublished: 1925 
	},
        { 
	id: 2, 
	title: "To Kill a Mockingbird", 
	author: "Bosco", 
	yearPublished: 1960 
	},
        { id: 3, 
	title: "1984", 
	author: "Bhanu", 
	yearPublished: 1949 
	},
      ];

      const filteredBooks = books.filter((book) => book.yearPublished < 1960);
      
  return (
    <div>
        <h1>ArrayandObjectPlayWithConditions</h1>
        <table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Title</th>
      <th>Author</th>
      <th>Year Published</th>
    </tr>
  </thead>
  <tbody>
    {filteredBooks.map((book) => (
      <tr key={book.id}>
        <td>{book.id}</td>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>{book.yearPublished}</td>
      </tr>
    ))}
  </tbody>
</table>
    </div>
  )
}

export default ArrayandObjectPlayWithConditions