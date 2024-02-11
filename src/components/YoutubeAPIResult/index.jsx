import React, { useState } from 'react';
import axios from 'axios';
import './style.css'; 

function YoutubeAPI() {
  // (State) Creating a hook for the search term
  const [searchTerm, setSearchTerm] = useState('');
  // (state) Creating a hook for the fetched videos
  const [videos, setVideos] = useState([]);

  // Function to handle changes in the search input
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // asynchronous function returns a Promise implicitly, and the await keyword can 
  // be used within an async function to pause the execution of the function until a 
  // Promise is settled (resolved or rejected)
  const searchVideos = async () => {
    try {
      // makes a GET request to the YouTube Data API using Axios
      // specifies the URL endpoint to fetch data from.
      const response = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
        // passes parameters to the API request using the params option of Axios
        // waits for the response from the API using the await keyword
        params: {
          key: 'AIzaSyCfM1E9frJRQ29BTnI2c5HjMLvbHPbT66Y',
          q: searchTerm, // The search term entered by the user
          part: 'snippet', // Specifies which parts of the video resource the API response should include. In this case, it's set to snippet, which includes basic details about the video (such as title, description, and thumbnail).
          type: 'video' // Specifies the type of result which is set to video to retrieve video results
        }
      });
      console.log(response.data);
      // extracts the array of video items from the response data
      setVideos(response.data.items);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    // Main container div for the component
    <div>
      {/* Search input field and button */}
      <div>
        <input
          type="text"
          value={searchTerm} // Value of the input field is controlled by the 'searchTerm' state
          onChange={handleChange} // When the input changes, the 'handleChange' function is called
          placeholder="Enter keywords"  // Placeholder text for the input field
        />
        {/* Button triggers the 'searchVideos' function when clicked */}
        <button className='btn btn-warning shadow m-2 ' onClick={searchVideos}>Search</button>
      </div>
      {/* List of videos */}
      <ul>
        {/* Mapping through 'videos' array to display each video */}
        {videos.map((video) => (
          // Each video item is rendered as a list item with a unique key
          <li key={video.id.videoId}>
            {/* Checkbox to the left of the video link */}
            <input type="checkbox" />
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
  );
}

export default YoutubeAPI;
