import React from 'react';
import Book from '../Book/Book'

const BookViewer = (props) => {
    return (
    <div className = "row row-space">
        <div className = "col-md-4">
            {/*Button here previous book*/}
            <button onClick={props.previousBook}>Previous Book</button>
        </div>
        <div className = "col-md-4">
            {/*Button here book*/}
            <Book book={props.book}/>
        </div>
        <div className = "col-md-4">
            {/*Button here next book*/}
            <button onClick={props.nextBook}>Next Book</button>
        </div>
    </div> 
    );
}

export default BookViewer;