import React from 'react';
import books from '../../store/books'
import AdminModalAddBook from './AdminModalAddBook';
import BooksPage from '../books/BooksPage';

const AdminPage = () => {
    return (
        <div className='admin-view'>
            <div className="container py-4">
                <AdminModalAddBook/>
                <BooksPage admin={true}/>
            </div>
        </div>
    );
};

export default AdminPage;