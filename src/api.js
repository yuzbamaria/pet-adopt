// Set up your API key and search query
import dotenv from "dotenv"
dotenv.config();

const searchQuery = 'react tutorial';

// Construct the API endpoint URL
const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${process.env.APIKEY}&part=snippet&q=${encodeURIComponent(searchQuery)}&maxResults=10`;

// Make the API request using Fetch
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Parse the response and handle the search results
    data.items.forEach(item => {
      if (item.id.kind === 'youtube#video') {
        console.log(`Title: ${item.snippet.title}`);
        console.log(`Video ID: ${item.id.videoId}`);
        console.log('');
      }
    });
  })
  .catch(error => {
    console.error('There was a problem with your fetch operation:', error);
  });
