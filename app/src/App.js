import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from './pages/error/ErrorPage';
import Header from './components/header/Header';
import AdminPage from './pages/admin/AdminPage';
import AboutPage from './pages/about/AboutPage';
import Footer from './components/footer/Footer';
import BooksPage from './pages/books/BooksPage';
import BookSelectedPage from './pages/books/BookSelectedPage';
import SingIn from './pages/sing-in/SingIn'
import UserPage from './pages/user/UserPage';
import { useSelector } from 'react-redux';




const App = () => {
	const user = useSelector(state=>state.user.user)

    return (
        <>
            <BrowserRouter>
					<Header/>
					<Routes >
						<Route path='/' element={user.isLogin ? (user.isAdmin ? <AdminPage /> : <UserPage />) : <SingIn/>} />
						<Route path='/about' element={<AboutPage />} />
						<Route path='/books' element={<BooksPage/>} />
						<Route path='/book/:id' element={<BookSelectedPage/>} />
						<Route path='*' element={<Error />} />
					</Routes>
					<Footer/>
			</BrowserRouter>
        </>
    );
};

export default App;