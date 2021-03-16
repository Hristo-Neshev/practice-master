import './Main.scss';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from '../../components/Home/Home';
import Login from '../../components/UserComponents/Login/Login';
import Register from '../../components/UserComponents/Register/Register';

function Main(props) {
   const loggedIn = props.loggedIn;

   return (
      <main className="main">
      <Switch>
      <Route path='/' exact><Home loggedIn={loggedIn}/></Route>
        <Route path='/register' render={()=> (
           loggedIn ? <Redirect to='/'/> : (<Register/>)
        )}/>
          <Route path='/login' render={()=> (
           loggedIn ? <Redirect to='/'/> : (<Login/>)
        )}/>
      </Switch>
      </main>

   );
}

export default Main;