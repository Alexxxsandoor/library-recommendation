import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FUNC_GET_BOOK_BY_ID } from '../../API/API_books';
import { useSelector } from 'react-redux';
import Feedback from '../../components/feedback/Feedback';
import { FUNC_ADD_FAVORITE, FUNC_DELETE_FAVORITE, FUNC_GET_FAVORITE } from '../../API/API_favorite';


const BookSelectedPage = () => {
    const user = useSelector(state=>state.user.user)

    const { id } = useParams()
    const [book, setBook] = useState([])
    const [favorite, setFavorite] = useState(false)
    const [buttonFavorite, setButtonFavorite] = useState(true)

    const handleAddedBook = (body)=>{
        FUNC_ADD_FAVORITE(body)
        setButtonFavorite(false)
    }
    const handleDeleteBook = (body)=>{
        FUNC_DELETE_FAVORITE(body)
        setButtonFavorite(false)
    }

    const checkBook= (favorite) =>{
        favorite.map(fav => fav.bookID == id && setFavorite(true))
    }

    useEffect(()=>{
        FUNC_GET_BOOK_BY_ID(setBook, id)
        if(user.isLogin) FUNC_GET_FAVORITE(checkBook, user._id)
    },[])

    useEffect(()=>{
        if(user.isLogin) FUNC_GET_FAVORITE(checkBook, user._id)
        if(!buttonFavorite) setButtonFavorite(true)
    },[buttonFavorite])

    

    return (
        <div className='book-view'>
            <div className="container">
                <div className='d-flex justify-content-between'>
                    <Button className='mt-3'><Link className="text-white" to={!user.isAdmin ? `/books` : `/`}>Назад</Link></Button>
                    {
                        user.isLogin ?
                        (!favorite ?
                        <Button onClick={()=>handleAddedBook({bookID: id,userID: user._id})} className='mt-3' variant="success">Додати в улюблені</Button>
                        :
                        <Button className='mt-3' variant="light">В улюбленних</Button>)
                        :null
                    }
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
                <Feedback/>
            </div>
        </div>
    );
};

export default BookSelectedPage;