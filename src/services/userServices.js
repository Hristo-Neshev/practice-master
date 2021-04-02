import { Redirect } from 'react-router-dom';

const APPLICATION_ID = '355CA966-0895-BB11-FF97-4EF75F76C400';
const REST_API_KEY = 'FD5261D4-E9E0-4F96-8BC2-ED5AC1B32176';

const registerUrl = `https://api.backendless.com/${APPLICATION_ID}/${REST_API_KEY}/users/register`;
const loginUrl = `https://api.backendless.com/${APPLICATION_ID}/${REST_API_KEY}/users/login`;

export const register = (email, password) => {
    return fetch(registerUrl, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ "email": email, "password": password })

    });
}

export const login = (email, password) => {
    return fetch(loginUrl, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "login": email,
            "password": password,
        })

    });
}

export const logout = () => {
    localStorage.clear();
    return <Redirect to="/" />
}


export const setToLocalStorage = (userId, token, userEmail) => {
    localStorage.setItem('userId', userId);
    localStorage.setItem('token', token);
    localStorage.setItem('userEmail', userEmail);
}

export const getLocalUserData = () => {
    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('token');
    const userEmail = localStorage.getItem('userEmail');
    const userData = { userId, token, userEmail };
    
    return userData;
}
