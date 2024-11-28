import './style.css';


function Book(props){
    return (
        <>
        <div>
            <h2 className="book-title">{props.booksDetails.title}</h2>
            <p className="book-author">{props.booksDetails.author}</p>
            <p className="book-description">{props.booksDetails.description}</p>
        </div>

        </>
    );
}

export default Book;