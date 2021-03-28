import './Header.scss';
import Logo from '../../components/componentElements/Logo/Logo';
import Navigation from '../../components/componentElements/Navigation/Navigation';

function Header(props) {



    return (
        <header className='header'>
            <Logo />
            <Navigation loggedIn={props.loggedIn} changeAppState={props.changeAppState} />
        </header>
    );
}

export default Header;