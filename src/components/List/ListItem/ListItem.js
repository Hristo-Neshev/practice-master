import './ListItem.scss';

const ListItem = (props) => {

    const onDeleteHandler = (e) => {
        // import repertoire service and get id from props
        //import change state handler from parent component
    }

    return (
        <li className="listItem-li-container">
            <p> {props.title} - {props.composer} {props.minutes} минути : {props.seconds} секунди  </p>
            <button className="list-controls-btn-delete" onclick={onDeleteHandler}>Изтрий</button>
        </li>
    )
}

export default ListItem;

