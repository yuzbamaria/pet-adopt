import React, { useState } from 'react';

function YoutubeAPI() {
  const [searchTerm, setSearchTerm] = useState('');
  const [videos, setVideos] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchVideos = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=AIzaSyCfM1E9frJRQ29BTnI2c5HjMLvbHPbT66Y&q=${searchTerm}&part=snippet&type=video`
      );
      const data = await response.json();
      setVideos(data.items);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Enter keywords"
        />
        <button className='btn btn-warning shadow m-2 ' onClick={searchVideos}>Search</button>
      </div>
      <ul>
        {videos.map((video) => (
          <li key={video.id.videoId}>
            <a
              href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {video.snippet.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default YoutubeAPI;
