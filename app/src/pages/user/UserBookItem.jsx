import React, { useEffect, useState } from 'react';
import { FUNC_GET_BOOK_BY_ID } from '../../API/API_books';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const UserBookItem = (props) => {
    const {bookId} = props
    
    const [book, setBook] = useState()

    useEffect(()=>{
        FUNC_GET_BOOK_BY_ID(setBook, bookId)
    },[])

    return (
        <>
            {
                book && 
                <Card border="secondary " className='m-1' style={{ width: '18rem' }}>
                    <Card.Header><p style={{fontSize: "22px", fontWeight:"600"}}>{book.name}</p></Card.Header>
                    <Card.Body>
                        <Card.Title><p style={{fontSize: "16px", fontWeight:"400"}}>{book.genre}</p></Card.Title>
                        <Card.Text>
                            <p style={{fontSize: "18px", fontWeight:"400"}}>{book.description && book.description.length > 90 ? book.description.slice(0, 90) + "..." : book.description}</p>
                        </Card.Text>
                        <Button className='m-1' variant="primary"><Link className="text-white" to={`/book/${bookId}`}>Читати</Link></Button>
                    </Card.Body>
                </Card> 
            }
        </>
    );
};

export default UserBookItem;