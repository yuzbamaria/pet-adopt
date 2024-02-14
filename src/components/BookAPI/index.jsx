import React from "react";
import { useState } from "react";
import { callBookAPI, setSearchQuery } from "../../utils/api"

function BookAPI(){
    const [searchTerm, setSearchTerm] = useState("");
    const [books, setBooks] = useState([]);

    function handleChange(query){
        setSearchTerm(query);
    }

    function searchBooks(){
        console.log(searchTerm)
        setSearchQuery(searchTerm);
        callBookAPI()
        .then((bookInfo)=>{
            setBooks(bookInfo);
        })
    }

    return(<div>
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={(e)=>handleChange(e.target.value)}
                placeholder="Search Books"
            />
            <button className='btn btn-warning shadow m-2' onClick={()=>searchBooks()}>Search</button>
        </div>
        {/* List of books */}
        <ul id="book-list">
            {/* {books.map((book) => ( */}
            {books.map((book) => (
            <li key={book.url}>
                <div>
                    <p>Title: {book.title}</p>
                    <p>Author(s): {book.author}</p>
                    <a href={book.url}>web-link</a>
                </div>
            </li>))}
        </ul>
    </div>)
}

export default BookAPI