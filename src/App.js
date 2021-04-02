import { useState, useEffect } from 'react';

import Header from './containers/Header/Header';
import Main from './containers/Main/Main';
import Footer from './containers/Footer/Footer';
import './App.css';

import * as userServices from './services/userServices';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState(null);


  useEffect(()=> {
    const user = userServices.getLocalUserData();
   
    if(user.token !== null) {
      setLoggedIn(true);
      setUserEmail(user.userEmail)
    }
  },[loggedIn, userEmail])

  const changeLoginState = (bool) => {
    setLoggedIn(bool);
  }

  return (
    <div className="App">
      <Header loggedIn={loggedIn} userEmail={userEmail} changeAppState={changeLoginState} />
      <Main loggedIn={loggedIn} changeAppState={changeLoginState} />
      <Footer />

    </div>
  );
}

export default App;








