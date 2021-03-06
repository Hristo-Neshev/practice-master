import './Login.scss';
import { Link, Redirect } from 'react-router-dom';
import { useState } from 'react';

import Notification from '../../../components/UI/Notification/Notification';
import LoadingSpinner from '../../../components/UI/LoadingSpinner/LoadingSpinner';
import * as userServices from '../../../services/userServices';

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [successfulLogin, setSuccessfulLogin] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState(null);
    const [loading, setLoading] = useState(false);


    const onChangeEmailHandler = (e) => {
        setEmail(e.target.value);
    }
    const onChangePasswordHandler = (e) => {
        setPassword(e.target.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        setLoading(true);

        userServices.login(email, password)
            .then(response => response.json())
            .then(resData => {
                setLoading(false);
                if (resData.userStatus === 'ENABLED') {
                    userServices.setToLocalStorage(resData.objectId, resData["user-token"], resData.email);
                    setSuccessfulLogin(true);
                    props.changeLoginState(true);
                } else {
                    setNotificationMessage(resData.message);
                }
            })
            .catch(error => {
                setNotificationMessage(error.message);
            })
    }

    if (successfulLogin) {
        return <Redirect to="/" />
    }

    return (
        <article className="user-form-container">
            {loading ? <LoadingSpinner /> : null}
            <h1>Вход</h1>
            <Notification notificationMessage={notificationMessage} />
            <section className="user-form">
                <div className="img-container">
                    <img src="music-notes.jpg" alt="img" />
                </div>
                <div className="form-container">
                    <form onSubmit={onSubmitHandler} className="user-form-form">
                        <input type="email" placeholder="Email" id="email" name="email" value={email} onChange={onChangeEmailHandler} />
                        <input type="password" placeholder="Парола" id="password" name="password" value={password} onChange={onChangePasswordHandler} />
                        <input className='input-btn' type="submit" value="Влез" />
                    </form>
                </div>
            </section>
            <div className='create-new-acc'>
                <h2>Нямаш профил?</h2>
                <p> Създай нов профил<Link to="/register">ТУК</Link></p>
            </div>
        </article>
    )
}

export default Login;