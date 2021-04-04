import { useState, useEffect } from 'react';

import './CreateConcert.scss';
import { getRepertoire } from '../../../../services/repertoireServices';

const CreateConcert = (props) => {
    const [repertoire, setRepertoire] = useState([]);
    const [concertProgram, setConcertProgram] = useState([]);

    useEffect(()=>{
        getRepertoire()
        .then(response => response.json())
        .then(resData => {
            setRepertoire(resData);
        })
        .catch(error => {
            console.log(error);
        })
    }, []);


    const formSubmitHandler = (event) => {
        event.preventDefault();
        const currentPieceId = event.target["piece-select"].value;
        const currentPiece = repertoire.find(piece => piece.objectId === currentPieceId);
      
        setConcertProgram((oldState) => oldState.concat([currentPiece]));
    }

    const onRemoveHandler = (pieceId) => {
        console.log(pieceId);
    }

    const options = repertoire.map(piece => {
        return (
            <option name="piece" id="piece" key={piece.objectId} value={piece.objectId}>{piece.title} - {piece.composer}</option>
        );
    });

    let listItems = <li>Добавете произведения в програмата</li>;

    if(concertProgram.length > 0) {
        listItems = concertProgram.map(piece => {
            return (
                <li key={piece.objectId}>
                    <p>{piece.title} - {piece.composer}</p>
                    <button  onClick={onRemoveHandler(piece.objectId)} >Премахни</button>
                </li>
            )
        })
    }
    console.log(listItems);
    return (
        <section className="create-concert-container">
            <form  className="create-concert-form" onSubmit={formSubmitHandler}>
                <label htmlFor="piece-select">Добави произведение</label>
                <select name="piece-select" id="piece-select">
                   {options}
                </select>
                <button type="submit">Добави произведение</button>
            </form>
            <section className="concert-program-list">
                <ul>
                    {listItems}
                </ul>
            </section>
        </section>
    );
};

export default CreateConcert;