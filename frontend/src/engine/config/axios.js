// Core
import axios from 'axios';

const instance = axios.create({
    responseType: 'json'
});

export const api = Object.freeze({
    signUp(data) {
        return instance.post('/api/auth/sign_up', data);
    },
    signIn(data) {
        return instance.post('/api/auth/sign_in', data);
    },
    getUser(options) {
        return instance.get('/api/auth/auth', options);
    }
})