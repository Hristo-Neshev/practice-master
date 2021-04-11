import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import * as userServices from '../../../services/userServices';

import './Register.scss';
import Notification from '../../../components/UI/Notification/Notification';


function Register(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [notificationMessage, setNotificationMessage] = useState(null);
    const [successfulReg, setSuccessfulReg] = useState(false);

    const onChangeEmailHandler = (e) => {
        setEmail(e.target.value);
    }
    const onChangePasswordHandler = (e) => {
        setPassword(e.target.value);
    }
    const onChangeRePasswordHandler = (e) => {
        setRePassword(e.target.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if (password !== rePassword) {
            setNotificationMessage('Паролите трябва да  съвпадат!');
            return;
        }

        userServices.register(email, password)
            .then(response => response.json())
            .then(resData => {
                if (resData.email) {
                    setSuccessfulReg(true);
                } else {
                    setNotificationMessage(resData.message);
                    setSuccessfulReg(false);
                }
            })
            .catch(error => {
                setNotificationMessage(error.message);
                setSuccessfulReg(false);
            })
    }

    if (successfulReg) {
        return <Redirect to="/login" />
    }

    return (
        <article className="user-form-container">
            <h1>Създай профил</h1>
            <Notification notificationMessage={notificationMessage} />
            <section className="user-form">
                <div className="img-container">
                    <img src="music-notes.jpg" alt="img" />
                </div>
                <div className="form-container">
                    <form onSubmit={onSubmitHandler} className="user-form-form">
                        <input type="email" required placeholder="Email" id="email" name="email" value={email} onChange={onChangeEmailHandler} />
                        <input type="password" minLength="6" placeholder="Парола" id="password" name="password" value={password} onChange={onChangePasswordHandler} />
                        <input type="password" minLength="6" placeholder="Повтори парола" id="rePassword" name="rePassword" value={rePassword} onChange={onChangeRePasswordHandler} />
                        <input className='input-btn' id="reg-btn" type="submit" value="Регистрaция" />
                    </form>
                </div>
            </section>
            <div className='create-new-acc'>
                <h2>Вече имаш профил?</h2>
                <p> Влез<Link to="/login">ТУК</Link></p>
            </div>
        </article>
    )
}

export default Register;