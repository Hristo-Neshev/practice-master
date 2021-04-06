import './Main.scss';
import { Route, Switch, Redirect } from 'react-router-dom';
import { lazy, Suspense, useContext } from 'react';

import { LoggedInContext } from '../../context/userContext';
import Home from '../../components/Home/Home';
import Login from '../UserComponents/Login/Login';
import NotFound from '../../components/NotFound/NotFound';
import LoadingSpinner from '../../components/UI/LoadingSpinner/LoadingSpinner';
const Register = lazy(() => import('../UserComponents/Register/Register'));
const Repertoire = lazy(() => import('./Repertoire/Repertoire'));
const Concerts = lazy(() => import('./Concerts/Concerts'))
const CreateConcert = lazy(() => import('./Concerts/CreateConcert/CreateConcert'));
const DetailConcert = lazy(() => import('./Concerts/DetailConcert/DetailConcert'));
const EditConcert = lazy(() => import('./Concerts/EditConcert/EditConcert'));

function Main(props) {
   const loggedIn = useContext(LoggedInContext);

   return (
      <main className="main">

         <Switch>
            <Route path='/' exact><Home loggedIn={loggedIn} /></Route>
            <Route path='/register' render={() => (
               loggedIn ? <Redirect to='/' /> : (<Suspense fallback={<LoadingSpinner />}><Register /></Suspense>)
            )} />
            <Route path='/login' render={() => (
               loggedIn ? <Redirect to='/' /> : (<Login changeLoginState={props.changeAppState} />)
            )} />
            <Route path='/repertoire' render={() => (
               !loggedIn ? <Redirect to='/' /> : (<Suspense fallback={<LoadingSpinner />}><Repertoire /></Suspense>)
            )} />
            <Route path='/concerts' render={() => (
               !loggedIn ? <Redirect to='/' /> : (<Suspense fallback={<LoadingSpinner />}><Concerts /></Suspense>)
            )} />
            <Route path='/createConcert' render={() => (
               !loggedIn ? <Redirect to='/' /> : (<Suspense fallback={<LoadingSpinner />}><CreateConcert /></Suspense>)
            )} />
            <Route path='/concert/:id' render={() => (
               !loggedIn ? <Redirect to='/' /> : (<Suspense fallback={<LoadingSpinner />}><DetailConcert /></Suspense>)
            )} />
            <Route path='/editConcert/:id' render={() => (
               !loggedIn ? <Redirect to='/' /> : (<Suspense fallback={<LoadingSpinner />}><EditConcert /></Suspense>)
            )} />
            <Route component={NotFound}></Route>
         </Switch>
      </main>

   );
}

export default Main;