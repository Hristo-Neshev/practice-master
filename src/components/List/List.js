import { useEffect, useState, Fragment } from 'react';

import LoadingSpinner from '../UI/LoadingSpinner/LoadingSpinner';
import ListItem from './ListItem/ListItem';
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

    let listItems = <LoadingSpinner className="spinner"/>;
    if (repertoire.length > 0) {
        listItems = repertoire.map(piece => {
            return (
                <ListItem id={piece.objectId} title={piece.title} composer={piece.composer} length={piece.length} key={piece.objectId} refresh={onRefreshHandler} />
            )
        })
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