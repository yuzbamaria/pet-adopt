// import dotenv from "dotenv"
// dotenv.config();
let searchQuery = "";
let limit = 10;
let apiUrl = ""
let apiResponse = {}

const setSearchQuery = (query)=>{
  // let keywords = "Javascript React"
  query = query.replace(" ", "+");
  searchQuery = query;
  apiUrl = `https://openlibrary.org/search.json?q=${searchQuery}&limit=${limit}`;
}

function callBookAPI(){
  console.log(apiUrl)
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      apiResponse = data;
      console.log(apiResponse);
    })
    .catch(error => {
      console.error('There was a problem with your fetch operation:', error);
    });
}

  export {apiResponse, callBookAPI, setSearchQuery }
