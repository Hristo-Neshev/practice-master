import { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import LoadingSpinner from '../../../../components/UI/LoadingSpinner/LoadingSpinner';
import Notification from '../../../../components/UI/Notification/Notification';
import { getConcertById } from '../../../../services/concertServices';
import timeCalculator from '../../../../utils/timeCalculator';
import './DetailConcert.scss';

const DetailConcert = (props) => {
    const [concert, setConcert] = useState({});
    const [loading, setLoading] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState(null);
    const routeMatch = useRouteMatch();

    useEffect(() => {
        const concertId = routeMatch.params.id;
        setLoading(true);
        getConcertById(concertId)
            .then(response => response.json())
            .then(resData => {
                setLoading(false);
                setConcert(resData);
            }).catch(error => {
                setNotificationMessage(error.message);
            });
    }, [routeMatch.params.id]);

    let list = null;
    let totalLength = '';
    if (concert.concertProgram) {
        totalLength = timeCalculator(concert.concertProgram);
        list = concert.concertProgram.map(piece => {
            return (
                <li key={piece.objectId}>{piece.title} - {piece.composer}</li>
            )
        });
    }

    return (
        <section className="details-container">
            {loading ? <LoadingSpinner /> : null}
            {notificationMessage ? <Notification notificationMessage={notificationMessage} /> : null}
            <section className="details">
                <section className="details-info">
                    <h2>Информация</h2>
                    <ul>
                        <li>Място: {concert.place}</li>
                        <li>Дата: {concert.concertDate}</li>
                        <li>Начален час: {concert.concertTime}</li>
                    </ul>
                </section>
                <section className="details-list">
                    <h2>Програма</h2>
                    <ol>
                        {list}
                    </ol>
                    <h2>Продължителност: {totalLength} минути</h2>
                </section>
            </section>
            <section className="link-to-edit-container">

                <Link to={`/editConcert/${concert.objectId}`} className="link-to-edit">Редактирай концерта</Link>
                <Link to={`/concerts`} className="link-to-edit">Назад</Link>
            </section>
        </section>
    )
};

export default DetailConcert;