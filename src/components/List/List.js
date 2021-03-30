import ListItem from './ListItem/ListItem';

const List = (props) => {
    let list = (
        <ul>
            <li>Все още нямате произведения в репертоара!</li>
        </ul>
    );

    // if (props.repertoire) { map => <ListItem/> }

    return list;
}

export default List;