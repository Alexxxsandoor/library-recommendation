import './bookList.style.css'
import BooksItem from './BooksItem';

const BooksList = (props) => {
    const {admin,booksList} = props


    return (
        <div className='books-list'>
            <div className="container">
                <div className='d-flex flex-wrap'>
                    {booksList.map(book => <BooksItem key={book._id} admin={admin} {...book}/>)}
                </div>
            </div>
        </div>
    );
};

export default BooksList;