import React, { useId, useState } from 'react';
import BooksList from '../../components/booksList/BooksList';
import books from '../../store/books'
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';

const BooksPage = (props) => {
    const {admin} = props

    const [bookChoose, setBookChoose] = useState(books)
    const handleSelectBook = (e) =>{
        const inputValue = e.target.value.toLowerCase()
        const selectedBook = []

        if(!inputValue) setBookChoose(books)
        else {
            books.map(book => book.name.toLowerCase().includes(inputValue) ? selectedBook.push(book) : null)
            setBookChoose(selectedBook)
        }        
    }
    const genre = []
    books.map(book => genre.push(book.genre))
    const uniqueGenres = new Set(genre);
    const genresArray = Array.from(uniqueGenres);

    const handleChooseGenre = (genre)=>{
        if(genre.toLowerCase() == 'all')   setBookChoose(books)
        else{
            const selectedBooks = []
            books.map(book => book.genre.toLowerCase() == genre.toLowerCase() ? selectedBooks.push(book) : null)
            setBookChoose(selectedBooks)
        }
        
    }


    return (
        <div className='books-view'>
            <div className='container py-3'>
                <h2>Books List</h2>
                <div className='d-flex'>
                    <Form.Control
                        type="text"
                        id="inputName"
                        onChange={handleSelectBook}
                    />
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Dropdown Button
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={()=>handleChooseGenre('All')} value={'All'}>All</Dropdown.Item>
                            {genresArray.map(genre=><Dropdown.Item onClick={()=>handleChooseGenre(genre)} key={new Date() + genre} value={genre}>{genre}</Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                
            
            </div>
            <BooksList admin={admin} booksList={bookChoose} />
        </div>
    );
};

export default BooksPage;