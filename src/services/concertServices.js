import { getLocalUserData } from './userServices';

const APPLICATION_ID = '355CA966-0895-BB11-FF97-4EF75F76C400';
const REST_API_KEY = 'FD5261D4-E9E0-4F96-8BC2-ED5AC1B32176';
const concertsBaseUrl = `https://api.backendless.com/${APPLICATION_ID}/${REST_API_KEY}/data/concerts`;

export const addConcert = (concertData) => {
    const userData = getLocalUserData();
    return fetch(concertsBaseUrl, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "user-token": userData.token
        },
        body: JSON.stringify(concertData)
    });
};

export const getAllConcerts = () => {
    const userData = getLocalUserData();
    return fetch(`${concertsBaseUrl}?where=ownerId='${userData.userId}'&pageSize=100`,{
        headers: {
            "Content-Type": "application/json",
            "user-token": userData.token
        }
    });
};

export const deleteConcert = (id) => {
    const userData = getLocalUserData();
     return fetch(`${concertsBaseUrl}/${id}`,{
         method:'DELETE',
         headers: {
            "user-token": userData.token
        }
     })
}