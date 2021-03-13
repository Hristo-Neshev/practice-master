import './Navigation.scss';

function Navigation(props) {
    const loggedIn = props.loggedIn;

    const guestNav = (
        <ul className='header-nav-ul'>
            <li><a href="#">Регистрация</a></li>
            <li><a href="#">За Practice Master</a></li>
        </ul>
    );

    const userNav = (
        <ul className='header-nav-ul'>
            <li><a href="#">Репертоар</a></li>
            <li><a href="#">Концерти</a></li>
            <li><a href="#">Изход</a></li>
        </ul>
    )

    return (
        <nav className='header-navigation'>
            {loggedIn ? userNav : guestNav}
        </nav>
    )
}

export default Navigation;