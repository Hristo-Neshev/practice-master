import { useState } from 'react';
import { Link } from 'react-router-dom';

import './Register.scss';
import Notification from '../../../components/UI/Notification/Notification';


function Register(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [notificationMessage, setNotificationMessage] = useState(null);


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
        if (password.length < 6) {
            setNotificationMessage('Паролата трябва да е с дължина поне 6 символа!');
            return;
        }
        if (password !== rePassword) {
            setNotificationMessage('Паролите трябва да  съвпадат!');
            return;
        }

        setNotificationMessage(null);
        console.log('Success reg');
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
                        <input type="email" placeholder="Email" id="email" name="email" value={email} onChange={onChangeEmailHandler} />
                        <input type="password" placeholder="Парола" id="password" name="password" value={password} onChange={onChangePasswordHandler} />
                        <input type="password" placeholder="Повтори парола" id="rePassword" name="rePassword" value={rePassword} onChange={onChangeRePasswordHandler} />
                        <input className='input-btn' type="submit" value="Влез" />
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