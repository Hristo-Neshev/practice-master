import { useState } from 'react';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  let [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <Header loggedIn={loggedIn}/>
      <Main loggedIn={loggedIn}/>
      <Footer/>

    </div>
  );
}

export default App;
