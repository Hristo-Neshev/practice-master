import { useState } from 'react';

import Header from './components/Header/Header';
import './App.css';

function App() {
  let [loggedIn, setLoggedIn] = useState(true);

  return (
    <div className="App">
      <Header loggedIn={loggedIn}/>

    </div>
  );
}

export default App;
