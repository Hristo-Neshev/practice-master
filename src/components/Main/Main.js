import './Main.scss';
import About from '../About/About';

function Main(props) {
    const loggedIn = props.loggedIn;

    return(
       <main className="main">
          <About/>
       </main>
    );
}

export default Main;