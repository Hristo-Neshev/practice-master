import './ListItem.scss';
import { deleteRepertoire } from '../../../services/repertoireServices';


const ListItem = (props) => {

    const onDeleteHandler = () => {
        deleteRepertoire(props.id)
            .then(res => res.json)
            .then(resData => {
                props.refresh();
            }).catch(error => console.log(error));
    }

    return (
        <li className="listItem-li-container">
            <p>{props.title} - {props.composer} Дължина: {props.length} минути</p>
            <button className="list-controls-btn-delete" onClick={onDeleteHandler}>Изтрий</button>
        </li>
    )
}

export default ListItem;



