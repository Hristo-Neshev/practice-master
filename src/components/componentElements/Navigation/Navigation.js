import './Navigation.scss';
import { NavLink } from 'react-router-dom';

function Navigation(props) {
    const loggedIn = props.loggedIn;

    const guestNav = (
        <ul className='header-nav-ul'>
            <li><NavLink to="/login">Вход</NavLink></li>
        </ul>
    );

    const userNav = (
        <ul className='header-nav-ul'>
            <li><NavLink to="/repertoire">Репертоар</NavLink></li>
            <li><NavLink to="/concerts">Концерти</NavLink></li>
            <li><NavLink to="/logout">Изход</NavLink></li>
        </ul>
    )

    return (
        <nav className='header-navigation'>
            {loggedIn ? userNav : guestNav}
        </nav>
    )
}

export default Navigation;