// import dotenv from "dotenv"
// dotenv.config();
let searchQuery = "";
let limit = 10;
let apiUrl = ""
let apiResponse = {}
// let bookInfo = []

const setSearchQuery = (query)=>{
  // let keywords = "Javascript React"
  query = query.replace(" ", "+");
  searchQuery = query;
  apiUrl = `https://openlibrary.org/search.json?q=${searchQuery}&limit=${limit}`;
}

async function callBookAPI(){
  let bookInfo = [];
  // console.log(apiUrl)
  return fetch(apiUrl)
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
          completed:false,
        }
        // console.log(apiResponse)
        book.title = apiResponse.docs[i].title
        book.author = apiResponse.docs[i].author_name && apiResponse.docs[i].author_name.length>0 ? apiResponse.docs[i].author_name.join(", ") : "n/a"
        book.url = `https://openlibrary.org${apiResponse.docs[i].key}`
        bookInfo.push(book);
      }
      // console.log(bookInfo);
      return bookInfo;
    })
    .catch(error => {
      console.error('There was a problem with your fetch operation:', error);
    });
}

export { callBookAPI, setSearchQuery }
