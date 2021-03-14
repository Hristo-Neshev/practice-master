import './Header.scss';
import Logo from '../componentElements/Logo/Logo';
import Navigation from '../componentElements/Navigation/Navigation';

function Header(props) {



    return (
        <header className='header'>
            <Logo />
            <Navigation loggedIn={props.loggedIn} />
        </header>
    );
}

export default Header;