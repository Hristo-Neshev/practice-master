import { useState } from 'react';

import Notification from '../../UI/Notification/Notification';
import { addRepertoire } from '../../../services/repertoireServices';
import './AddRepertoireForm.scss';

const AddRepertoireForm = (props) => {
    const [title, setTitle] = useState('');
    const [composer, setComposer] = useState('');
    const [minutes, setMinutes] = useState('минути');
    const [seconds, setSeconds] = useState('секунди');

    const [notificationMessage, setNotificationMessage] = useState(null);

    const onAddRepertoireSubmitHandler = (event) => {
        event.preventDefault();

        let length = '';
        if (seconds.toString().length === 1) {
            length = `${minutes}:0${seconds}`
        } else if (seconds.toString().length === 2) {
            length = `${minutes} : ${seconds}`
        }

        const pieceData = { title, composer, length };

        addRepertoire(pieceData)
            .then(response => response.json())
            .then(() => {
                setTitle('');
                setComposer('');
                setMinutes('минути');
                setSeconds('секунди');
            }).catch(error => {
                setNotificationMessage(error.message)
            })
    }

    const onInputChangeHandler = (event) => {
        switch (event.target.name) {
            case 'title': setTitle(event.target.value); break;
            case 'composer': setComposer(event.target.value); break;
            case 'minutes': setMinutes(event.target.value); break;
            case 'seconds': setSeconds(event.target.value); break;
            default: break;
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

