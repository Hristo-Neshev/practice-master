import ListItem from './ListItem/ListItem';
import './List.scss';

const List = (props) => {
    let listItems = (
        <li>Все още нямате произведения в репертоара!</li>
    );

    if(true) {
        listItems = <ListItem title="Menuet" composer="Bach" minutes="3" seconds="13" id="5"/>
    }

    return (
        <ul className="no-repertoire-yet">
            {listItems}
        </ul>
    );
}

export default List;