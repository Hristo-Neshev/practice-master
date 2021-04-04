import './Repertoire.scss';
import Notification from '../../../components/UI/Notification/Notification'
import List from '../../../components/List/List';
import AddRepertoireForm from './AddRepertoireForm/AddRepertoireForm';

const Repertoire = (props) => {
    return (
        <section className="repertoire-container">
            <h1>Репертоар</h1>
            <Notification notificationMessage={false} />
            <section className="repertoire-sections-container">
                <AddRepertoireForm className="add-form" />
                <section className="repertoire-list-container">
                    <h2>Текущ репертоар</h2>
                    <List />
                </section>
            </section>
        </section>
    );
};

export default Repertoire;