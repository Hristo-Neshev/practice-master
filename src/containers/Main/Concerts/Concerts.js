import { useState, useEffect } from 'react';
import { getAllConcerts, deleteConcert } from '../../../services/concertServices';
import { Link } from 'react-router-dom';

import LoadingSpinner from '../../../components/UI/LoadingSpinner/LoadingSpinner';
import './Concerts.scss';

const Concerts = (props) => {
    const [concerts, setConcerts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getAllConcerts()
            .then(response => response.json())
            .then(resData => {
                setConcerts(resData);
                setLoading(false);
            }).catch(error => {
                console.log(error);
            })
    }, [])

    const onDeleteHandler = (e) => {
        const concertId = e.target.id;
        setLoading(true);
        deleteConcert(concertId)
            .then(response => response.json())
            .then(resData => {
                setLoading(false);
                setConcerts(oldState => oldState.filter(concert => concert.objectId !== concertId));
            }).catch(error => {
                console.log(error);
            })
    }

    let listItems = <li className="concert-listItem">Все още нямате планирани концерти!</li>;

    if (concerts.length > 0) {
        listItems = concerts.map(concert => {
            return (
                <li className="concert-listItem" key={concert.objectId}>
                    <p> {concert.place} - {concert.concertDate}</p>
                    <section className="concert-controls">
                        <Link to={`/concert/${concert.objectId}`} className="details-link">Детайли</Link>
                        <button className="concert-delete-btn" id={concert.objectId} onClick={onDeleteHandler}>Изтрий</button>
                    </section>
                </li>
            )
        })
    }

    return (
        <section className="concerts-container">
            <section className="future-concerts">
                <h1>Предстоящи концерти</h1>
                {loading ? <LoadingSpinner /> : null}
                <ul className="concerts-list">
                    {listItems}
                </ul>
            </section>
            <section className="add-concert-link-container">
                <Link to="/createConcert" className="add-concert-link"> Създай концерт</Link>
            </section>
        </section>
    );
};

export default Concerts;