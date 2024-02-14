import React from "react";
import { useState } from "react";
import { callBookAPI, setSearchQuery } from "../../utils/api"
import BookResult from "../BookResult";
import { bookInfo } from "../../utils/api";

function BookAPI(){
    const [searchTerm, setSearchTerm] = useState("");

    function handleChange(query){
        setSearchTerm(query);
        console.log(searchTerm);
    }

    function searchBooks(){
        console.log(searchTerm)
        setSearchQuery(searchTerm);
        callBookAPI();
    }

    return(<>
    <div>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e)=>handleChange(e.target.value)}
          placeholder="Search Books"
        />
        <button className='btn btn-warning shadow m-2' onClick={searchBooks}>Search</button>
      </div>
      {/* List of books */}
      <ul id="book-list">
        {bookInfo.map((book) => (
        <li key={book.url}>
          <p>Title: {book.title}</p>
          <p>Author(s): {book.authpr}</p>
          <a href={book.url}>web-link</a>
        </li>
      ))}
      </ul>
    </div>
    </>)
}

export default BookAPI