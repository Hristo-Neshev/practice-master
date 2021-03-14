import './Main.scss';

import Home from '../../components/Home/Home';
import Login from '../../components/UserComponents/Login/Login';

function Main(props) {
    const loggedIn = props.loggedIn;

    return(
       <main className="main">
          {/* <Home loggedIn={loggedIn}/> */}
          <Login/>
       </main>
         
    );
}

export default Main;