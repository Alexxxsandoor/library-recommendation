import './header.style.css'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
    <>
      <div id='header' className='bg-dark text-white py-3'>
        <div className="container">
          <div className='d-flex justify-content-between align-items-center'>
            <div id='logo'><Link to="/"><h5>Library</h5></Link></div>
            <div id='header-nav'>
              <Link to="/about">About Us</Link>
              <Link to="/books">Books</Link>
              <Link to='/sign-in'>Sing in</Link>
            </div>
          </div>
        </div>
      </div>
    </>
    );
};


export default Header;