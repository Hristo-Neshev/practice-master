import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './CreateConcert.scss';
import { getRepertoire } from '../../../../services/repertoireServices';
import { addConcert } from '../../../../services/concertServises';
import Notification from '../../../../components/UI/Notification/Notification';

const CreateConcert = (props) => {
    const [repertoire, setRepertoire] = useState([]);
    const [concertProgram, setConcertProgram] = useState([]);
    const [place, setPlace] = useState(null);
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    const [notificationMessage, setNotificationMessage] = useState(null);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const history = useHistory();


    useEffect(() => {
        getRepertoire()
            .then(response => response.json())
            .then(resData => {
                setRepertoire(resData);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    const addPieceSubmitHandler = (event) => {
        event.preventDefault();
        const currentPieceId = event.target["piece-select"].value;
        const currentPiece = repertoire.find(piece => piece.objectId === currentPieceId);

        if (!concertProgram.find(piece => piece.objectId === currentPiece.objectId)) {
            setConcertProgram((oldState) => oldState.concat([currentPiece]));
        }
    }

    const onDetailsSubmitHandler = (e) => {
        e.preventDefault();
        const place = e.target.place.value;
        const date = e.target.date.value;
        const time = e.target.time.value;

        setPlace(place);
        setDate(date);
        setTime(time);
    }

    const onRemoveHandler = (e) => {
        const currentItemId = e.target.id;
        const updatedProgram = concertProgram.filter(piece => piece.objectId !== currentItemId);
        setConcertProgram(updatedProgram);
    }

    const onCreateConcertHandler = (e) => {
        const concert = { place: place, concertDate: date, concertTime: time, concertProgram: concertProgram };

        if (!place || !date || !time) {
            setNotificationMessage('Попълнете всички полета!');
            return;
        }
        if (concertProgram.length === 0) {
            setNotificationMessage('Добавете произведения в програмата!');
            return;
        }

        addConcert(concert)
        .then(response => response.json())
        .then(resData => {
            console.log(resData);
            history.push('/concerts')
        }).catch(error => {
            console.log(error);
            setNotificationMessage(error.message)
        })

    }

    const options = repertoire.map(piece => {
        return (
            <option className="option" name="piece" id="piece" key={piece.objectId} value={piece.objectId}>{piece.title} - {piece.composer}</option>
        );
    });
    let listItems = <li>Добавете произведения в програмата</li>;

    if (concertProgram.length > 0) {
        listItems = concertProgram.map(piece => {
            return (
                <li key={piece.objectId} className="concert-program-listItem">
                    <p>{piece.title} - {piece.composer}</p>
                    <button id={piece.objectId} onClick={onRemoveHandler} className="list-btn" >Премахни</button>
                </li>
            )
        })
    }

    return (
        <section className="create-concert-container">
            <section className="add-concert-data-container">
                <section className="concert-details">
                    <form className="concert-details-form" onSubmit={onDetailsSubmitHandler}>
                        <label htmlFor="place">Място</label>
                        <input type="text" name="place" id="place" />
                        <label htmlFor="date">Дата</label>
                        <input type="date" name="date" id="date" />
                        <label htmlFor="time">Начален час</label>
                        <input type="time" name="time" id="time" />
                        <button className="add-piece-btn" type="submit">Добави информация</button>
                    </form>
                </section>
                <section className="add-concert-program">
                    <section className="info">
                        <p>Място: {place}</p>
                        <p>Дата: {date}</p>
                        <p>Начален час: {time}</p>
                    </section>
                    <form className="add-piece-form" onSubmit={addPieceSubmitHandler}>
                        <label htmlFor="piece-select">Добави произведение</label>
                        <select name="piece-select" id="piece-select">
                            {options}
                        </select>
                        <button type="submit">Добави произведение</button>
                    </form>
                    <h2>Програма:</h2>
                    <section className="concert-program-list">
                        <ul>
                            {listItems}
                        </ul>
                    </section>
                </section>
            </section>
            <section className="save-btn-container">
                <Notification notificationMessage={notificationMessage} />
                <button className="create-concert-btn" onClick={onCreateConcertHandler}>Създай концерт</button>
            </section>
        </section>

    );
};

export default CreateConcert;