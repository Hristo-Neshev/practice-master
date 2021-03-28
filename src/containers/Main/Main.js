import './Main.scss';
import { Route, Switch, Redirect } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Home from '../../components/Home/Home';
import Login from '../UserComponents/Login/Login';
import NotFound from '../../components/NotFound/NotFound';
import LoadingSpinner from '../../components/UI/LoadingSpinner/LoadingSpinner';
const Register = lazy(()=> import('../UserComponents/Register/Register') );

function Main(props) {
   const loggedIn = props.loggedIn;

   return (
      <main className="main">

         <Switch>
            <Route path='/' exact><Home loggedIn={loggedIn} /></Route>
            <Route path='/register' render={() => (
               loggedIn ? <Redirect to='/' /> : (<Suspense fallback={<LoadingSpinner/>}><Register/></Suspense>)
            )} />
            <Route path='/login' render={() => (
               loggedIn ? <Redirect to='/' /> : (<Login  changeLoginState={props.changeAppState}/>)
            )} />
            <Route component={NotFound}></Route>
         </Switch>
      </main>

   );
}

export default Main;