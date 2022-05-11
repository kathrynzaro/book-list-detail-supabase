// import functions and grab DOM elements
// import { books } from './data.js';
import { getBooks } from './fetch-utils.js';
import { renderBook } from './render-utils.js';


// let state
async function loadData() {
    const bookList = document.getElementById('books');
    const books = await getBooks();
    
    for (let book of books) {
        const bookDiv = renderBook(book);
        bookList.append(bookDiv);
    }
}

loadData();
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
