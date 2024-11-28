import BookList from "./Components/BookList";
import { Books } from "./utils/mockdata";
import { useState } from "react";


function App() {
  const [searchText,setSearchText]=useState("");
  const [filteredBook,setFilteredBook]=useState(Books);

  function handleSearch(){
        const filteredBook = Books.filter((book)=> book.title.toLowerCase().includes(SearchText.toLowerCase()));
        setFilteredBook(filteredBook);
  }

  function handleChange(event){
    setSearchText(event.target.value);
  }
  return (
    <>
     <input type="text" name="" id="" placeholder="Enter a book name" onChange={handleChange}/>
     <button onClick={handleSearch}>Search</button>
     <BookList booksData={filteredBook}/>
    </>
  );
}

export default App;
