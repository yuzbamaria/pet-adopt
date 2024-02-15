import React, { useState, useEffect } from "react";
import { callBookAPI, setSearchQuery } from "../../utils/api"
import { addBooks } from "../../utils/database";

function BookAPI(){
    const [searchTerm, setSearchTerm] = useState("");
    const [books, setBooks] = useState([]);
    const [selectedBooks, setSelectedBooks] = useState([]);

    useEffect(()=>{
        if (books.length>0){
            addBooks(books);
            addBooks(selectedBooks, "savedBooks");
        }
    },[books, selectedBooks])

    function handleChange(query){
        setSearchTerm(query);
    }

    function selectBook(book, checked){
        // console.log(book, checked);
        //return
        let newSelection;
        if (checked){
            newSelection = [...selectedBooks, book];
        } else {
            const index = selectedBooks.indexOf(book);
            selectedBooks.splice(index,1);
            newSelection = [...selectedBooks];
        }
        // console.log(newSelection);
        setSelectedBooks(newSelection);
    }

    function searchBooks(){
        console.log(searchTerm);
        setSearchQuery(searchTerm);
        callBookAPI()
        .then((bookInfo)=>{
            setBooks(bookInfo);
        })
    }

    const styleBook={
        border: "1px solid black",
        margin: "0.5rem",
    }

    return(<div>
        <div className="input-group mb-3">
            <input
                type="text"
                value={searchTerm}
                onChange={(e)=>handleChange(e.target.value)}
                placeholder="Search Books..."
                className="form-control"
            />
            <button 
                className="btn btn-outline-secondary search-btn" 
                onClick={()=>searchBooks()}>
                Search
            </button>
        </div>
        {/* List of books */}
        <ul id="book-list" style={{padding:0}}>
            {books.map((book) => (
            <li key={book.url} className="d-flex">
                <input 
                type="checkbox" 
                className="p-3"
                
                onChange={(e)=>{
                    selectBook(book, e.target.checked)
                }}
                />
                <div className="p-2" style={styleBook}>
                    <p className="m-0"><b>Title: </b>{book.title}</p>
                    <p className="m-0"><b>Author(s): </b>{book.author}</p>
                    <a href={book.url}><b>web-link</b></a>
                </div>
            </li>))}
        </ul>
    </div>)
}

export default BookAPI