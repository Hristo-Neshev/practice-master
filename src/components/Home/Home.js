import './Home.scss';
import GuestHome from './GuestHome/GuestHome';
import UserHome from './UserHome/UserHome';

function Home(props){
    const loggedIn = props.loggedIn;

    return loggedIn ? <UserHome/> : <GuestHome/>;
}

export default Home;