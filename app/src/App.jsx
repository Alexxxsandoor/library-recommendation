import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Error from './pages/error/ErrorPage';
import HomePage from './pages/home/HomePage';
import Header from './components/header/Header';
import AdminPage from './pages/admin/AdminPage';
import AboutPage from './pages/about/AboutPage';
import Footer from './components/footer/Footer';
import BooksPage from './pages/books/BooksPage';
import BookSelectedPage from './pages/books/BookSelectedPage';
import SingIn from './pages/sing-in/SingIn'
import UserPage from './pages/user/UserPage';
import axios from 'axios';

const App = () => {
    return (
        <>
            <BrowserRouter>
					<Header/>
					<Routes >
						<Route path='/' element={<HomePage />} />
						<Route path='/about' element={<AboutPage />} />
						<Route path='/admin' element={<AdminPage />} />
						<Route path='/user' element={<UserPage />} />
						<Route path='/books' element={<BooksPage/>} />
						<Route path='/book/:id' element={<BookSelectedPage/>} />
						<Route path='/sign-in' element={<SingIn/>} />
						<Route path='*' element={<Error />} />
					</Routes>
					<Footer/>
			</BrowserRouter>
        </>
    );
};

export default App;