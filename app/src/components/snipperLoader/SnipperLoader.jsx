import Spinner from 'react-bootstrap/Spinner';
import './snipperLoader.style.css'

const SnipperLoader = () => {
    return (
        <div id="snipper-loader" className='container d-flex justify-content-center'>
            <Spinner animation="border" />
        </div>
    );
};

export default SnipperLoader;