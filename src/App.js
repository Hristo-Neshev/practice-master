import { useState } from 'react';

import Header from './containers/Header/Header';
import Main from './containers/Main/Main';
import Footer from './containers/Footer/Footer';
import './App.css';

function App() {
  let [loggedIn, setLoggedIn] = useState(true);

  return (
    <div className="App">
      <Header loggedIn={loggedIn}/>
      <Main loggedIn={loggedIn}/>
      <Footer/>

    </div>
  );
}

export default App;
