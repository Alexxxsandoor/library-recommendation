import React, { useEffect, useState } from 'react';
import BooksList from '../../components/booksList/BooksList';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import SnipperLoader from '../../components/snipperLoader/SnipperLoader';
import {FUNC_GET_LIST_BOOK} from '../../API_books';

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
    const handlelSortBooks = (sort)=>{
        if(sort === "All") setBookChoose(bookList)
        else if(sort == "name_a"){
            setBookChoose([...bookList].sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)); 
        }
        else if(sort == "name_z"){
            setBookChoose([...bookList].sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1))
        }
        else{
            const selectedBooks = []
            bookList.map(book => book.genre.toLowerCase() == sort.toLowerCase() ? selectedBooks.push(book) : null)
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
        FUNC_GET_LIST_BOOK(setBookList);
        serLoader(true)
    },[])

    //leaving the list inside js
    useEffect(()=>{
        setBookChoose(bookList)
        genreList()
        serLoader(false)
    },[bookList])
    
    return (
        <div className='books-view'>
            <div className='container py-3'>
                <h2>Список Книг</h2>
                <div className='d-flex'>
                    <Form.Control
                        type="text"
                        id="inputName"
                        placeholder='Пошук за назвою'
                        onChange={handleSelectBookName}
                    />
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-genre" className='mx-2'>
                            Пошук за жанром
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={()=>handlelSortBooks('All')} value={'All'}>All</Dropdown.Item>
                            {genres.map(genre=><Dropdown.Item onClick={()=>handlelSortBooks(genre)} key={new Date() + genre} value={genre}>{genre}</Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-sort">
                            Сортвувати за...
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item key={new Date() + "name_a"} onClick={()=>{handlelSortBooks("name_a")}}>Назвою А-Я</Dropdown.Item>
                            <Dropdown.Item key={new Date() + "name_z"} onClick={()=>{handlelSortBooks("name_z")}}>Назвою Я-А</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                
            
            </div>
            {loader? <SnipperLoader /> :<BooksList admin={admin} booksList={bookChoose} />}
            
        </div>
    );
};

export default BooksPage;