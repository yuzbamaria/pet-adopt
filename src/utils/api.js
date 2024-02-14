// import dotenv from "dotenv"
// dotenv.config();
let searchQuery = "";
let limit = 10;
let apiUrl = ""
let apiResponse = {}

let bookInfo = [
]

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
      for(let i=0; i<apiResponse.docs.length; i++){
        let book = {
          title:"",
          author:"",
          url:"",
        }
        book.title = apiResponse.docs[i].title
        book.author = apiResponse.docs[i].author_name.length>1 ? apiResponse.docs[i].author_name.join(", ") : apiResponse.docs[i].author_name[0]
        book.url = `https://openlibrary.org${apiResponse.docs[i].key}`
        bookInfo.push(book);
      }
      console.log(bookInfo);
    })
    .catch(error => {
      console.error('There was a problem with your fetch operation:', error);
    });
}

export {apiResponse, callBookAPI, setSearchQuery }
