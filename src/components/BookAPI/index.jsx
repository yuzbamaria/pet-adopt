import React, { useState, useEffect } from "react";
import { callBookAPI, setSearchQuery } from "../../utils/api"
import { addBooks } from "../../utils/database";

function BookAPI(){
    const [searchTerm, setSearchTerm] = useState("");
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        if (books.length>0)addBooks(books);
    },[books])

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

    const styleBook={
        border: "1px solid black",
        margin: 0,
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
            <li key={book.url} className="d-flex">
                <input type="checkbox" className="p-3"/>
                <div className="p-2" style={styleBook}>
                    <p>Title: {book.title}</p>
                    <p>Author(s): {book.author}</p>
                    <a href={book.url}>web-link</a>
                </div>
            </li>))}
        </ul>
    </div>)
}

export default BookAPI