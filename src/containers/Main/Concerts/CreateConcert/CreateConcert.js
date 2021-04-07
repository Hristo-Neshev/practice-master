import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './CreateConcert.scss';
import { getRepertoire } from '../../../../services/repertoireServices';
import { addConcert, updateConcert } from '../../../../services/concertServices';
import Notification from '../../../../components/UI/Notification/Notification';
import timeCalculator from '../../../../utils/timeCalculator';

const CreateConcert = (props) => {

    const concertToUpdate = props.oldConcertData;
    const [repertoire, setRepertoire] = useState([]);
    const [concertProgram, setConcertProgram] = useState([]);
    const [place, setPlace] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [notificationMessage, setNotificationMessage] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [firstLoad, setFirstLoad] = useState(true)
    const history = useHistory();


    useEffect(() => {
        if (concertToUpdate !== undefined) {
            if (firstLoad) {
                setFirstLoad(true);
                setEditMode(true);
                setPlace(concertToUpdate.place);
                setTime(concertToUpdate.concertTime);
                setDate(concertToUpdate.concertDate);
                setConcertProgram(concertToUpdate.concertProgram);
            }
        }

        getRepertoire()
            .then(response => response.json())
            .then(resData => {
                setRepertoire(resData);
            })
            .catch(error => {
                console.log(error);
            })
    }, [props.oldConcertData, firstLoad, concertToUpdate]);

    const addPieceSubmitHandler = (event) => {
        event.preventDefault();
        const currentPieceId = event.target["piece-select"].value;
        const currentPiece = repertoire.find(piece => piece.objectId === currentPieceId);

        if (!concertProgram.find(piece => piece.objectId === currentPiece.objectId)) {
            setConcertProgram((oldState) => oldState.concat([currentPiece]));
        }
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

        if(editMode) {
            updateConcert(concertToUpdate.objectId ,concert)
            .then(response => response.json())
            .then(resData => {
                history.push(`/concert/${concertToUpdate.objectId}`)
            }).catch(error => {
                console.log(error);
                setNotificationMessage(error.message)
            });
        } else {
            addConcert(concert)
            .then(response => response.json())
            .then(resData => {
                history.push('/concerts')
            }).catch(error => {
                console.log(error);
                setNotificationMessage(error.message)
            });
        }

      

    }

    const options = repertoire.map(piece => {
        return (
            <option className="option" name="piece" id="piece" key={piece.objectId} value={piece.objectId}>{piece.title} - {piece.composer}: {piece.length}</option>
        );
    });

    let listItems = <li>Добавете произведения в програмата</li>;
    let totalLength = '';
    if (concertProgram) {
         totalLength = timeCalculator(concertProgram);
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
    }

    const onDetailsChangeInputHandler = (e) => {
        const currentInput = e.target.name;
        switch (currentInput) {
            case 'place': setPlace(e.target.value); break;
            case 'date': setDate(e.target.value); break;
            case 'time': setTime(e.target.value); break;
            default: break;
        }
    }

    return (
        <section className="create-concert-container">
            {editMode ? <h1 className="create-edit-heading">Промени концерт</h1> : <h1 className="create-edit-heading">Създай концерт</h1>  }
            <section className="add-concert-data-container">
                <section className="concert-details">
                    <form className="concert-details-form" >
                        <label htmlFor="place">Място</label>
                        <input type="text" name="place" id="place" value={place} onChange={onDetailsChangeInputHandler} />
                        <label htmlFor="date">Дата</label>
                        <input type="date" name="date" id="date" value={date} onChange={onDetailsChangeInputHandler} />
                        <label htmlFor="time">Начален час</label>
                        <input type="time" name="time" id="time" value={time} onChange={onDetailsChangeInputHandler} />
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
                        <h2>Продължителност: {totalLength} минути</h2>
                    </section>
                </section>
            </section>
            <section className="save-btn-container">
                <Notification notificationMessage={notificationMessage} />
                {!editMode ? <button className="create-concert-btn" onClick={onCreateConcertHandler}>Създай концерт</button> : <button className="create-concert-btn" onClick={onCreateConcertHandler}>Редактирай концерт</button>}
            </section>
        </section>

    );
};

export default CreateConcert;