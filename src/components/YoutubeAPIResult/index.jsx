import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css'; 
import { addYoutubeVideos } from '../../utils/database'

function YoutubeAPI() {
  // (State) Creating a hook for the search term
  const [searchTerm, setSearchTerm] = useState('');
  // (state) Creating a hook for the fetched videos
  const [videos, setVideos] = useState([]);
  // Initialize selectedVideos state with the value from local storage, 
  // or an empty array if no value is found
  const [selectedVideos, setSelectedVideos] = useState([]); 
  // Function to handle changes in the search input
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCheckboxChange = (videoId) => {
    // Check if the videoId is already selected
    const index = selectedVideos.indexOf(videoId);
    let updatedSelectedVideos = [];
    if (index === -1) {
      // Add the videoId to selectedVideos if not already selected
      updatedSelectedVideos = [...selectedVideos, videoId];
    } else {
      // Remove the videoId from selectedVideos if already selected
      // Creates a copy of the selectedVideos array using the spread operator 
      // Ensures that the original selectedVideos array is not modified directly
      updatedSelectedVideos = selectedVideos.filter(id => id !== videoId);
    }

    // Update the state with the new selected videos
    addYoutubeVideos(updatedSelectedVideos);
//     addYoutubeVideos(userDB.currentUser, updatedSelectedVideos);

    // Resets the videos state, so the user starts with an empty list for each new search (clear the videos array)
    // setVideos([]);
    // Save updatedSelectedVideos to local storage
    // localStorage.setItem('selectedVideos', JSON.stringify(updatedSelectedVideos));
    
  };

useEffect(() => {
  // Save selected videos to local storage whenever selectedVideos changes
  localStorage.setItem('selectedVideos', JSON.stringify(selectedVideos));
  // The dependency array [selectedVideos] specifies that it should only run when the selectedVideos variable changes.
}, [selectedVideos]);


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
          type: 'video', // Specifies the type of result which is set to video to retrieve video results
          relevanceLanguage: 'en',
          maxResults: 10,
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
          placeholder="Add a Youtube tutorial"  // Placeholder text for the input field
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
  );
}

export default YoutubeAPI;
