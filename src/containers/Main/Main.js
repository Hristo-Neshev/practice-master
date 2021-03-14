import './Main.scss';
import About from '../../components/About/About';
import Home from '../../components/Home/Home';

function Main(props) {
    const loggedIn = props.loggedIn;

    return(
       <main className="main">
          {/* <About/> */}
          <Home loggedIn={loggedIn}/>
       </main>
    );
}

export default Main;