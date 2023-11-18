import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import AdminModalChangedBook from '../../pages/admin/AdminModalChangedBook';
import { FUNC_DELETE_BOOK_BY_ID } from '../../API/API_books';

const BooksItem = (props) => {
    const {_id, name, author,genre, description, image,admin} = props

    const handleDeleteBook = () =>{
        FUNC_DELETE_BOOK_BY_ID(alert("DELETED"), _id) 
    }
    return (
        <Card className='m-2 custom-card' style={{ width: '18rem' }}>
            {image && <Card.Img variant="top" src={image} alt={"image:" + name}/>}
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description && description.length > 90 ? description.slice(0, 90) + "..." : description}</Card.Text>
                <Card.Text>{author}</Card.Text>
                <Card.Text>{genre}</Card.Text>
                {!admin && <Button variant="primary"><Link className="text-white" to={`/book/${_id}`}>Read</Link></Button>}
                {admin && <Button onClick={()=>handleDeleteBook()} variant="danger">Delete</Button>}
                {admin && <AdminModalChangedBook book={props}/>}

            </Card.Body>
        </Card>
    );
};

export default BooksItem;