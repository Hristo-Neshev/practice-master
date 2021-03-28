import './Navigation.scss';
import { NavLink } from 'react-router-dom';

import * as userServices from '../../../services/userServices';

function Navigation(props) {
    const loggedIn = props.loggedIn;

    const guestNav = (
        <ul className='header-nav-ul'>
            <li><NavLink to="/login">Вход</NavLink></li>
        </ul>
    );

    const logoutHandler = () => {
        props.changeAppState(false);
        userServices.logout();
    }

    const userNav = (
        <ul className='header-nav-ul'>
            <li><NavLink to="/repertoire">Репертоар</NavLink></li>
            <li><NavLink to="/concerts">Концерти</NavLink></li>
            <li><NavLink to="/notes">Бележки</NavLink></li>
            <li><button className="nav-btn" onClick={logoutHandler}>Изход</button></li>
        </ul>
    )

    return (
        <nav className='header-navigation'>
            {loggedIn ? userNav : guestNav}
        </nav>
    )
}

export default Navigation;