import './Main.scss';

import Home from '../../components/Home/Home';
import Login from '../../components/UserComponents/Login/Login';
import Register from '../../components/UserComponents/Register/Register';

function Main(props) {
    const loggedIn = props.loggedIn;

    return(
       <main className="main">
          {/* <Home loggedIn={loggedIn}/> */}
          {/* <Login/> */}
         <Register/>
       </main>
         
    );
}

export default Main;