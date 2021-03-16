import './Logo.scss';
import { Link } from 'react-router-dom';

function Logo() {
    return (
        <div className='logo'>
             <i className="fab fa-product-hunt fa-2x"></i>
              <Link to="/"><h2>Practice Master</h2></Link>
        </div>
    )
}

export default Logo;