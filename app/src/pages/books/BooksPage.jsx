import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BooksList from '../../components/booksList/BooksList';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import API_SERVER from '../../constants';
import SnipperLoader from '../../components/snipperLoader/SnipperLoader';
import {GET_LIST_BOOK} from '../../API';

const BooksPage = (props) => {
    const {admin} = props

    const [loader, serLoader] = useState(true)
    const [bookList, setBookList] = useState([])
    const [bookChoose, setBookChoose] = useState([])
    const [genres, setGenres] = useState([])

    //search for a book by title
    const handleSelectBookName = (e) =>{
        const inputValue = e.target.value.toLowerCase()
        const selectedBook = []
        if(!inputValue) setBookChoose(bookList)
        else {
            bookList.map(book => book.name.toLowerCase().includes(inputValue) ? selectedBook.push(book) : null)
            setBookChoose(selectedBook)
        }        
    }

    //search for a book by genre
    const handleSelectBookGenre = (genre)=>{
        if(genre === "All") setBookChoose(bookList)
        else{
            const selectedBooks = []
            bookList.map(book => book.genre.toLowerCase() == genre.toLowerCase() ? selectedBooks.push(book) : null)
            setBookChoose(selectedBooks)
        }
    }

    const genreList = ()=>{
        const genre = []
        bookList.map(book => genre.push(book.genre))
        setGenres(Array.from(new Set(genre)));
    }

    
    //getting a list from the database
    useEffect(()=>{
        GET_LIST_BOOK(setBookList)
    },[])

    //leaving the list inside js
    useEffect(()=>{
        setBookChoose(bookList)
        serLoader(false)
        genreList()
    },[bookList])
    
    return (
        <div className='books-view'>
            <div className='container py-3'>
                <h2>Books List</h2>
                <div className='d-flex'>
                    <Form.Control
                        type="text"
                        id="inputName"
                        placeholder='Пошук за назвою'
                        onChange={handleSelectBookName}
                    />
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Dropdown Button
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={()=>handleSelectBookGenre('All')} value={'All'}>All</Dropdown.Item>
                            {genres.map(genre=><Dropdown.Item onClick={()=>handleSelectBookGenre(genre)} key={new Date() + genre} value={genre}>{genre}</Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                
            
            </div>
            {loader? <SnipperLoader /> :<BooksList admin={admin} booksList={bookChoose} />}
            
        </div>
    );
};

export default BooksPage;