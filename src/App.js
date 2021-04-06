import { useState, useEffect } from 'react';

import { LoggedInContext } from './context/userContext';
import Header from './containers/Header/Header';
import Main from './containers/Main/Main';
import Footer from './containers/Footer/Footer';
import './App.css';

import * as userServices from './services/userServices';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState(null);


  useEffect(() => {
    const user = userServices.getLocalUserData();

    if (user.token !== null) {
      setLoggedIn(true);
      setUserEmail(user.userEmail)
    }
  }, [loggedIn, userEmail])

  const changeLoginState = (bool) => {
    setLoggedIn(bool);
  }

  return (
    <div className="App">
      <LoggedInContext.Provider value={loggedIn}>
        <Header userEmail={userEmail} changeAppState={changeLoginState} />
        <Main changeAppState={changeLoginState} />
      </LoggedInContext.Provider>
      <Footer />

    </div>
  );
}

export default App;








