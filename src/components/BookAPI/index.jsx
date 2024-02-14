import React from "react";
import { useState } from "react";
import {apiResponse, callBookAPI, setSearchQuery} from "../../utils/api"
import BookResult from "../BookResult";

function BookAPI(){
    const [searchTerm, setSearchTerm] = useState("");

    function handleChange(e){
        setSearchTerm(e);
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
          value={searchTerm} // Value of the input field is controlled by the 'searchTerm' state
          onChange={(e)=>handleChange(e.target.value)} // When the input changes, the 'handleChange' function is called
          placeholder="Search Books"  // Placeholder text for the input field
        />
        {/* Button triggers the 'searchVideos' function when clicked */}
        <button className='btn btn-warning shadow m-2' onClick={searchBooks}>Search</button>
      </div>
      {/* List of books */}
      <ul id="book-list">
        <BookResult />
      </ul>
    </div>
    </>)
}

export default BookAPI