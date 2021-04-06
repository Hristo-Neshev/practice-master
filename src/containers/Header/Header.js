import Logo from '../../components/componentElements/Logo/Logo';
import Navigation from '../../components/componentElements/Navigation/Navigation';
import './Header.scss';

function Header(props) {
      return (
        <header className='header'>
            <Logo />
            <Navigation  userEmail={props.userEmail} changeAppState={props.changeAppState} />
        </header>
    );
}

export default Header;