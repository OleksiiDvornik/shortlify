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

// Links API
export const getLinks = () => async (dispatch) => {
    try {
        const token = localStorage.getItem('token');
        const response = await api.getLinks({
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        dispatch(setLinks(response.data));
    } catch (err) {
        console.log(err.message);
    }
}

export const createLink = (newLink, links) => async (dispatch) => {
    try {
        const token = localStorage.getItem('token');
        const response = await api.addLink(newLink, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const newLinks = [...links, response.data];
        dispatch(setLinks(newLinks));
    } catch (err) {
        console.log(err);
    }
}

export const deleteLink = (links, id) => async (dispatch) => {
    try {
        const token = localStorage.getItem('token');
        const newLinks = links.filter(link => link._id !== id);
        await api.deleteLink(id, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        dispatch(setLinks(newLinks));
    } catch (err) {
        console.log(err.message);
    }
}