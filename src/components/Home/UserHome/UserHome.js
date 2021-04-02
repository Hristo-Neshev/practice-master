import './UserHome.scss';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

function UserHome(props) {
    return (
        <Fragment>
            <section className="user-home">
                <section className="user-heading">
                    <h1>Practice Master</h1>
                    <p>Работи Ефективно</p>
                </section>
                <section className="btn-controls">
                    <button className="start-now">  <li><Link to="/createConcert">Създай концерт!</Link></li></button>
                </section>
            </section>
        </Fragment>
    )
}

export default UserHome;