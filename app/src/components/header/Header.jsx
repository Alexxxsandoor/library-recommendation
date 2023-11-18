import { useDispatch, useSelector } from 'react-redux';
import './header.style.css'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import { logOut } from '../../store/user/userSlice';


const Header = () => {
    const user = useSelector(state=>state.user.user)
    const dispatch = useDispatch()

    const handleLogout = () => dispatch(logOut())

    return (
    <>
      <div id='header' className='bg-dark text-white py-3'>
        <div className="container">
          <div className='d-flex justify-content-between align-items-center'>
            <div id='logo'><Link to="/"><h5>Library</h5></Link></div>
            <div id='header-nav'>
              <Link to="/about">Про нас</Link>
              {!user.isAdmin && <Link to="/books">Список книг</Link>}
              {user.isLogin &&<Link to="/">Особиста сторінка</Link>}
              {user.isLogin && <b className='p-2'>Користувач: {user.loginName}{user.isAdmin && "🛡️"}</b>}
              {user.isLogin && <Button variant="secondary" onClick={handleLogout}>Вийти з аккаунту</Button>}
              {!user.isLogin && <Link to="/"><Button variant="success">Увійти</Button></Link>}
            </div>
          </div>
        </div>
      </div>
    </>
    );
};


export default Header;