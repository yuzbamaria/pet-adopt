// import dotenv from "dotenv"
// dotenv.config();

const searchQuery = ()=>{
  let keywords = "Javascript React"
  keywords = keywords.replace(" ", "+");
  return keywords;
}

const limit = 10;
const apiUrl = `https://openlibrary.org/search.json?q=${searchQuery}&limit=${limit}`;

const apiResponse = {}

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    apiResponse = data;
  })
  .catch(error => {
    console.error('There was a problem with your fetch operation:', error);
  });
