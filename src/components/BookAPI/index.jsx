import React from "react";

function BookAPI(){

    return(<>
    // Main container div for the component
    <div>
      {/* Search input field and button */}
      <div>
        <input
          type="text"
          value={searchTerm} // Value of the input field is controlled by the 'searchTerm' state
          onChange={handleChange} // When the input changes, the 'handleChange' function is called
          placeholder="Search Books"  // Placeholder text for the input field
        />
        {/* Button triggers the 'searchVideos' function when clicked */}
        <button className='btn btn-warning shadow m-2 ' onClick={searchBooks}>Search</button>
      </div>
      {/* List of videos */}
      <ul>
        {/* Mapping through 'videos' array to display each video */}
        {videos.map((video) => (
          // Each video item is rendered as a list item with a unique key
          <li key={video.id.videoId}>
            {/* Checkbox to the left of the video link */}
            <input 
              type="checkbox" 
              // sets the checked attribute of the checkbox. It determines whether the checkbox 
              // should be checked or not.
              // checks if the video.id.videoId (the ID of the video) exists in the 
              // selectedVideos array. If it does, it returns true, indicating that the checkbox should be checked. If not, it returns false, indicating that the checkbox should not be checked.
              checked={selectedVideos.includes(video.id.videoId)}
              // Updates the state based on the checkbox selection. 
              // When the checkbox is clicked, it calls the handleCheckboxChange function, 
              // passing the video.id.videoId as an argument.
              onChange={() => handleCheckboxChange(video.id.videoId)}
            />
            <a
              href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
               {/* Displaying the title of the video */}
              {video.snippet.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
    </>)
}

export default BookAPI