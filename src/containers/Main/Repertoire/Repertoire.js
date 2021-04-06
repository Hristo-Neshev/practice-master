import {useState} from 'react';

import './Repertoire.scss';
import Notification from '../../../components/UI/Notification/Notification'
import List from '../../../components/List/List';
import AddRepertoireForm from './AddRepertoireForm/AddRepertoireForm';

const Repertoire = (props) => {
    const [refreshList, setRefreshList] = useState(false);

    const refreshHandler = () => {
        setRefreshList(oldState => {
            if(oldState === false) {
                return true;
            } else {
                return false;
            }
        })
    }

    return (
        <section className="repertoire-container">
            <h1>Репертоар</h1>
            <Notification notificationMessage={false} />
            <section className="repertoire-sections-container">
                <AddRepertoireForm className="add-form" refreshHandler={refreshHandler} />
                <section className="repertoire-list-container">
                    <h2>Текущ репертоар</h2>
                    <List refreshList={refreshList} />
                </section>
            </section>
        </section>
    );
};

export default Repertoire;