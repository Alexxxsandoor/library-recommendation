import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import AdminModalChangedBook from '../../pages/admin/AdminModalChangedBook';
import { FUNC_DELETE_BOOK_BY_ID } from '../../API/API_books';
import { useSelector } from 'react-redux';

const BooksItem = (props) => {
    const user = useSelector(state=>state.user.user)
    const {_id, name, author,genre, description, image} = props

    const handleDeleteBook = () =>{
        FUNC_DELETE_BOOK_BY_ID(alert("DELETED"), _id) 
    }
    return (
        <Card className='m-2 custom-card' style={{ width: '24rem' }}>
            {image && <Card.Img variant="top" src={image} alt={"image:" + name}/>}
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description && description.length > 90 ? description.slice(0, 90) + "..." : description}</Card.Text>
                <Card.Text>{author}</Card.Text>
                <Card.Text>{genre}</Card.Text>
                <Button className='m-1' variant="primary"><Link className="text-white" to={`/book/${_id}`}>Читати</Link></Button>
                {user.isAdmin && <Button className='m-1' onClick={()=>handleDeleteBook()} variant="danger">Видалити книгу</Button>}
                {user.isAdmin && <AdminModalChangedBook book={props}/>}

            </Card.Body>
        </Card>
    );
};

export default BooksItem;