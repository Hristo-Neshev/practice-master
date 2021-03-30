import { useState, useEffect } from 'react';

import Notification from '../../UI/Notification/Notification';
import { getLocalUserData } from '../../../services/userServices';
import './AddRepertoireForm.scss';


const AddRepertoireForm = (props) => {
    const [title, setTitle] = useState('');
    const [composer, setComposer] = useState('');
    const [minutes, setMinutes] = useState('минути');
    const [seconds, setSeconds] = useState('секунди');

    const [notificationMessage, setNotificationMessage] = useState(null);
    const userData = getLocalUserData();

    const onAddRepertoireSubmitHandler = (event) => {
        event.preventDefault();

        if (title.length < 1) {
            setNotificationMessage('Моля въведете заглавие!');
            return;
        }
        if (minutes < 0 || minutes > 59) {
            setNotificationMessage('Минутите трябва да са между 0 и 59!');
            return;
        }
        if (seconds < 0 || seconds > 59) {
            setNotificationMessage('Секундите трябва да са между 0 и 59!');
            return;
        }

        /// fetch и смяна на parent state
        console.log('Data is valid!');
        console.log(title);
        console.log(composer);
        console.log(minutes);
        console.log(seconds);
        console.log(userData.userId);


    }

    const onInputChangeHandler = (event) => {
        switch (event.target.name) {
            case 'title': setTitle(event.target.value); break;
            case 'composer': setComposer(event.target.value); break;
            case 'minutes': setMinutes(event.target.value); break;
            case 'seconds': setSeconds(event.target.value); break;
        }
    }



    return (
        <section className="addRepertoireForm-container">
            <h2>Добави произведение</h2>
            <Notification notificationMessage={notificationMessage} />
            <form onSubmit={onAddRepertoireSubmitHandler}>
                <input type="text" required name="title" id="title" placeholder="Заглавие" onChange={onInputChangeHandler} value={title} />
                <input type="text" required name="composer" id="composer" placeholder="Композитор" onChange={onInputChangeHandler} value={composer} />
                <input type="number" min="0" max="59" name="minutes" id="minutes" placeholder="Минути" onChange={onInputChangeHandler} value={minutes} />
                <input type="number" min="0" max="59" name="seconds" id="seconds" placeholder="Секунди" onChange={onInputChangeHandler} value={seconds} />
                <button className=" input-btn" type="submit">Добави</button>
            </form>
        </section>
    )
}

export default AddRepertoireForm;