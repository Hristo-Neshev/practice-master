import './Main.scss';
import About from '../../components/About/About';
import Home from '../../components/Home/Home';

function Main(props) {
    const loggedIn = props.loggedIn;

    return(
       <main className="main">
          <Home loggedIn={loggedIn}/>
          <About/>
       </main>
    );
}

export default Main;