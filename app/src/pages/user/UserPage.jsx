import React from 'react';
import BooksList from '../../components/booksList/BooksList';
import books from '../../store/books'

const UserPage = () => {
    const recBooksList = books.slice(1, 6)
    const hisBooksList = books.slice(5, 9)
    const favBooksList = books.slice(30, 32)

    return (
        <div className='user-view'>
            <div className="container py-4">
                <h4>User Name: Alexxxsandoor</h4>
                <h3>Recommendations:</h3>
                <BooksList booksList={recBooksList}/>
                <h3>Favorite books:</h3>
                <BooksList booksList={favBooksList}/>
                <h3>History:</h3>
                <BooksList booksList={hisBooksList}/>
            </div>
        </div>
    );
};

export default UserPage;