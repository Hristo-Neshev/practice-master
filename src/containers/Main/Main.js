import './Main.scss';
import { Route, Switch } from 'react-router-dom';

import Home from '../../components/Home/Home';
import Login from '../../components/UserComponents/Login/Login';
import Register from '../../components/UserComponents/Register/Register';

function Main(props) {
   const loggedIn = props.loggedIn;

   return (
      <main className="main">
      <Switch>
      <Route path='/' exact><Home loggedIn={loggedIn}/></Route>
        <Route path='/register' component={Register}/>
        <Route path='/login' component={Login}/>
      </Switch>
      </main>

   );
}

export default Main;