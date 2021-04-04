import { useEffect, useState, Fragment } from 'react';

import ListItem from './ListItem/ListItem';
import LoadingSpinner from '../UI/LoadingSpinner/LoadingSpinner';
import * as repertoireServices from '../../services/repertoireServices';
import './List.scss';

const List = (props) => {
    const [refresh, setRefresh] = useState(false);
    const [repertoire, setRepertoire] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        repertoireServices.getRepertoire()
            .then(response => response.json())
            .then(resData => {
                setRepertoire(resData);
                setLoading(false);
            }).catch(err => {
                console.log(err.message)
                setLoading(false);
            })
    }, [refresh])

    const onRefreshHandler = (e) => {
        if (refresh) {
            setRefresh(false);
        } else {
            setRefresh(true);
        }
    }

    let listItems = 'Все още нямате произведения в  репартоарa'
    if (repertoire.length > 0) {
        listItems = repertoire.map(piece => {
            return (
                <ListItem id={piece.objectId} title={piece.title} composer={piece.composer} length={piece.length} key={piece.objectId} refresh={onRefreshHandler} />
            )
        })
    }

    return (
        <Fragment>
            {loading ? <LoadingSpinner/> : null}
            <ul className="repertoire-list">
                {listItems}
            </ul>
            <button className="refresh-btn" onClick={onRefreshHandler} >Презареди</button>
        </Fragment>
    );
}

export default List;