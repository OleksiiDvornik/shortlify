// Core
import { setUser, setIsLoggedIn, setLinks } from './slice';

//Engine
import { api } from '../../config/axios';

// User API
export const createUser = async (data) => {
    try {
        const response = await api.signUp(data);
        console.log(response.data.message);
    } catch (err) {
        console.log(err.message);
    }
}

export const logIn = (data) => async (dispatch) => {
    try {
        const response = await api.signIn(data);
        dispatch(setUser(response.data));
        dispatch(setIsLoggedIn(true));
        localStorage.setItem('token', response.data.token)
    } catch (err) {
        console.log(err.message);
    }
}

export const authUser = () => async (dispatch) => {
    try {
        const token = localStorage.getItem('token');
        const response = await api.getUser({
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        dispatch(setUser(response.data));
        dispatch(setIsLoggedIn(true));
        localStorage.setItem('token', response.data.token)
    } catch (err) {
        console.log(err.message);
        localStorage.removeItem('token');
    }
}

export const logOut = () => (dispatch) => {
    dispatch(setUser({}));
    dispatch(setIsLoggedIn(false));
    localStorage.removeItem('token');
}
