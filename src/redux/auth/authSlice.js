import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    user: null,
    token: null
};

const setauth_data = (state, action) => {
    console.log(action);
    state.isAuthenticated = true;
    state.user = action.payload.user;
    state.token = action.payload.token;

    localStorage.setItem('userData', JSON.stringify(action.payload));

    return state;
}

const get_localAuth = (state) => {
    const userData = localStorage.getItem('userData');
    if (userData) {
        const user = JSON.parse(userData);
        state.isAuthenticated = true;
        state.user = user.user;
        state.token = user.token;
    }

    return state;
}

const remove_authData = (state, action) => {
    state.isAuthenticated = false;
    state.user = null;
    state.token = null;

    localStorage.removeItem('userData');
}




export const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuthData: (state, actions) => {
            state = setauth_data(state, actions);
        },
        getAuthData: (state) => {
            console.log("Get Auth Data");
            state = get_localAuth(state);
        },
        removeAuthData: (state, actions) => {
            state = remove_authData(state, actions);
        }
    }
});

export const { setAuthData, getAuthData, removeAuthData } = AuthSlice.actions;

export default AuthSlice.reducer;