import Login from "../containers/UserComponents/Login/Login";
import { Redirect } from 'react-router-dom';

const API_KEY = 'AIzaSyAES8-tPtyixO1XT4bn-XPUyVc311t_Ct4';

export const register = (email, password) => {
    return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true
        })

    });
}

export const login = (email, password) => {
    return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true
        })

    });
}

export const logout = () => {
    localStorage.clear();
    return <Redirect to="/" />
}


export const setToLocalStorage = (userEmail, userId, token, expiresIn, refreshToken) => {
    localStorage.setItem('userEmail', userEmail);
    localStorage.setItem('userId', userId);
    localStorage.setItem('token', token);
    localStorage.setItem('expiresIn', expiresIn);
    localStorage.setItem('refreshToken', refreshToken);
}

export const getLocalUserData = () => {
    const userEmail = localStorage.getItem('userEmail');
    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('token');
    const expiresIn = localStorage.getItem('expiresIn');
    const refreshToken = localStorage.getItem('refreshToken');

    const userData = { userEmail, userId, token, expiresIn, refreshToken };
    return userData;
}
