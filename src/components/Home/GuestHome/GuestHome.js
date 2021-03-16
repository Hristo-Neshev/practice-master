import './GuestHome.scss';
import { Fragment } from 'react';
import About from '../../About/About';
import { Link } from 'react-router-dom';

function GuestHome(props) {
    return (
        <Fragment>
            <section className="guest-home">
                <section className="guest-heading">
                    <h1>Practice Master</h1>
                    <p>Работи Ефективно</p>
                </section>
                <section className="btn-controls">
                    <button className="start-now">  <li><Link to="/register">Започни сега!</Link></li></button>
                </section>
            </section>
            <About />
        </Fragment>
    )
}

export default GuestHome;