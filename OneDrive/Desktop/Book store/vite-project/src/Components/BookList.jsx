import './style.css';
import Book from './Book';


function BookList(props){
    return (
        <>
         {
                props.booksData.map((data)=>(
                    <Book key={data.id} booksDetails={data}></Book>
                ))
            }
    
        </>
    );
}

export default BookList;