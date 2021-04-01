import { useState, useEffect } from 'react';

import './Repertoire.scss';
import Notification from '../../../components/UI/Notification/Notification'
import List from '../../../components/List/List';
import AddRepertoireForm from '../../../components/componentElements/AddRepertoireForm/AddRepertoireForm';
import * as repertoireServices from '../../../services/repertoireServices';

const Repertoire = (props) => {
    const [repertoire, setRepertoire] = useState([]);
 

 

//  useEffect(() => {
//     repertoireServices.getRepertoire()
//         .then(response => response.json())
//         .then(resData => {
//             console.log(resData);
//             setRepertoire(resData);
//         }).catch(err => console.log(err.message))
// }, [])



    return (
        <section className="repertoire-container">
            <h1>Репертоар</h1>
            <Notification notificationMessage={false} />
            <section className="repertoire-sections-container">
                <AddRepertoireForm />
                <section className="repertoire-list-container">
                    <h2>Текущ репертоар</h2>
                    <List repertoire={repertoire}/>
                </section>
            </section>
        </section>
    );
};

export default Repertoire;