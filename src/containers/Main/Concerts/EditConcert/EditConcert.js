import { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';

import CreateConcert from '../CreateConcert/CreateConcert';
import LoadingSpinner from '../../../../components/UI/LoadingSpinner/LoadingSpinner';
import Notification from '../../../../components/UI/Notification/Notification';
import { getConcertById, updateConcert } from '../../../../services/concertServices';
import './EditConcert.scss';

const EditConcert = (props) => {
    const [concert, setConcert] = useState({});
    const [notificationMessage, setNotificationMessage] = useState(null);

    const routeMach = useRouteMatch();


    useEffect(() => {
        const concertId = routeMach.params.id;

        getConcertById(concertId)
            .then(response => response.json())
            .then(resData => {
                setConcert(resData);
            }).catch(error => {
                setNotificationMessage(error.message);
            })
    }, [routeMach.params.id]);



    return (
        <section className="edit-concert-container">
            {notificationMessage ? <Notification notificationMessage={notificationMessage} /> : null}
            { concert ? <CreateConcert oldConcertData={concert} /> : <LoadingSpinner />}
        </section>
    );
};

export default EditConcert;