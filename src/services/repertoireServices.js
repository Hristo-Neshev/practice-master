import { getLocalUserData } from './userServices';

const APPLICATION_ID = '355CA966-0895-BB11-FF97-4EF75F76C400';
const REST_API_KEY = 'FD5261D4-E9E0-4F96-8BC2-ED5AC1B32176';
const repertoireBaseUrl = `https://api.backendless.com/${APPLICATION_ID}/${REST_API_KEY}/data/repertoire`;



export const addRepertoire = (pieceData) => {
    const userData = getLocalUserData();
    return fetch(repertoireBaseUrl, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "user-token": userData.token
        },
        body: JSON.stringify(pieceData)
    })
}

export const getRepertoire = () => {
    const userData = getLocalUserData();
    return fetch(`${repertoireBaseUrl}?where=ownerId='${userData.userId}'`,{
        headers: {
            "Content-Type": "application/json",
            "user-token": userData.token
        }
    })
}

export const deleteRepertoire = (id) => {
    const userData = getLocalUserData();
     return fetch(`${repertoireBaseUrl}/${id}`,{
         method:'DELETE',
         headers: {
            "user-token": userData.token
        }
     })
}



