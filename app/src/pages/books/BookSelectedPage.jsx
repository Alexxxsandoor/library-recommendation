import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FUNC_GET_BOOK_BY_ID } from '../../API/API_books';


const BookSelectedPage = () => {
    const { id } = useParams()
    const [book, setBook] = useState()

    const handleAddedBook = (name)=>{
        alert(`${name} added to favorites`)
    }

    useEffect(()=>{
        FUNC_GET_BOOK_BY_ID(setBook, id)
    },[])

    return (
        <div className='book-view'>
            <div className="container">
                <div className='d-flex justify-content-between'>
                    <Button className='mt-3'><Link className="text-white" to={`/books`}>Назад</Link></Button>
                    <Button onClick={()=>handleAddedBook(book.name)} className='mt-3' variant="success">Додати в улюблені</Button>
                </div>
                
                {book ? 
                <div className='d-flex py-5'>
                        {book.image && <img style={{maxWidth:'350px'}} src={book.image} alt="" />}
                        <div className='px-5'>
                            {book.name && <h1>{book.name}</h1>}
                            {book.description && <p>{book.description}</p>}
                            {book.genre && <p><b>Жанр:</b> {book.genre}</p>}
                            {book.author && <p><b>Автор:</b> {book.author}</p>}
                            {book.pdf_url && <a href={book.pdf_url}>Читати</a>}
                        </div>
                </div> 
                :
                <h1 className='text-center py-4'>Book not found</h1>    
            }
                
            </div>
        </div>
    );
};

export default BookSelectedPage;