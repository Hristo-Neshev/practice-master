import './GuestHome.scss';
import { Fragment } from 'react';
import About from '../../About/About';
function GuestHome(props) {
    return (
      <Fragment>
            <section className="guest-home">
            <section className="guest-heading">
                <h1>Practice Master</h1>
                <p>Работи Ефективно</p>
            </section>
            <section className="btn-controls">
                <button className="start-now"><a href="#">Започни сега!</a></button>
            </section>
          </section>
          <About/>
      </Fragment>
    )
}

export default GuestHome;