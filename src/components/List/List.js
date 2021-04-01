import ListItem from './ListItem/ListItem';
import { useEffect, useState, Fragment } from 'react';
import * as repertoireServices from '../../services/repertoireServices';
import './List.scss';

const List = (props) => {
    const [refresh, setRefresh] = useState(false);
    const [repertoire, setRepertoire] = useState([])

    useEffect(() => {
        console.log('refresh useEffect');
        repertoireServices.getRepertoire()
            .then(response => response.json())
            .then(resData => {
                console.log(resData);
                setRepertoire(resData);
            }).catch(err => console.log(err.message))
    }, [refresh])

    const onRefreshHandler = (e) => {
        if (refresh) {
            setRefresh(false);
        } else {
            setRefresh(true);
        }
    }

    let listItems = '';
    if (repertoire.length > 0) {
        listItems = repertoire.map(piece => {
            return (
                <ListItem id={piece.objectId} title={piece.title} composer={piece.composer} length={piece.length} key={piece.objectId} refresh={onRefreshHandler} />
            )
        })
    } else {
        listItems = <p>Все още нямате произведения в репертоара си!</p>;
    }

    return (
        <Fragment>
            <ul className="repertoire-list">
                {listItems}
            </ul>
            <button className="refresh-btn" onClick={onRefreshHandler} >Презареди</button>
        </Fragment>
    );
}

export default List;