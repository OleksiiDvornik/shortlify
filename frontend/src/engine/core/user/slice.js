//Core
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {},
    isLoggedIn: false,
    links: []
};

const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setIsLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload;
        },
        setLinks: (state, action) => {
            state.links = action.payload;
        }
    }
});

export const { setUser, setIsLoggedIn, setLinks } = user.actions;
export default user.reducer;