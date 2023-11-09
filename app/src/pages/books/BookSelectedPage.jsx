import React from 'react';
import books from '../../store/books';
import { Link, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


const BookSelectedPage = () => {
    const { id } = useParams()

    const selectedBook = books.find(book => book._id.$oid === id)

    const handleAddedBook = (name)=>{
        alert(`${name} added to favorites`)
    }

    return (
        <div className='book-view'>
            <div className="container">
                <div className='d-flex justify-content-between'>
                    <Button className='mt-3'><Link className="text-white" to={`/books`}>Back</Link></Button>
                    <Button onClick={()=>handleAddedBook(selectedBook.name)} className='mt-3' variant="success">Add to favorites</Button>
                </div>
                
                {selectedBook ? 
                <div className='d-flex py-5'>
                        {selectedBook.image && <img style={{maxWidth:'350px'}} src={selectedBook.image} alt="" />}
                        <div className='px-5'>
                            <h1>{selectedBook.name}</h1>
                            <p>{selectedBook.description}</p>
                            <p><b>Genre:</b> {selectedBook.genre}</p>
                            <p><b>Author:</b> {selectedBook.author}</p>
                            
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