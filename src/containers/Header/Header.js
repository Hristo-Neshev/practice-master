import { useContext } from 'react';

import { LoggedInContext} from '../../context/userContext';
import Logo from '../../components/componentElements/Logo/Logo';
import Navigation from '../../components/componentElements/Navigation/Navigation';
import './Header.scss';

function Header(props) {
    const loggedIn = useContext(LoggedInContext);


    return (
        <header className='header'>
            <Logo />
            <Navigation loggedIn={loggedIn} userEmail={props.userEmail} changeAppState={props.changeAppState} />
        </header>
    );
}

export default Header;