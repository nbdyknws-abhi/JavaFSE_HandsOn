import React from "react";

function BookDetails(props) {
  return (
    <div className="st2">
      <h1>📘 Book Details</h1>
      <ul>
        {props.books.map((book) => (
          <li key={book.id}>
            <h3>{book.bname}</h3>
            <h4>Price: ₹{book.price}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookDetails;
