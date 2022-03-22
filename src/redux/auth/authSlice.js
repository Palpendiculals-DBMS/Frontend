import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

const setauthData = (state, action) => {
  console.log(action);
  state.isAuthenticated = true;
  state.user = action.payload.user;
  state.token = action.payload.token;

  localStorage.setItem("userData", JSON.stringify(action.payload));

  return state;
};

const getLocalAuth = state => {
  const userData = localStorage.getItem("userData");
  if (userData) {
    const user = JSON.parse(userData);
    state.isAuthenticated = true;
    state.user = user.user;
    state.token = user.token;
    axios.defaults.headers.common = {
      Authorization: `Bearer ${user.token}`,
    };
  }

  return state;
};

const removeauthData = (state, action) => {
  state.isAuthenticated = false;
  state.user = null;
  state.token = null;

  localStorage.removeItem("userData");
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthData: (state, actions) => {
      state = setauthData(state, actions);
    },
    getAuthData: state => {
      console.log("Get Auth Data");
      state = getLocalAuth(state);
    },
    removeAuthData: (state, actions) => {
      state = removeauthData(state, actions);
    },
  },
});

export const { setAuthData, getAuthData, removeAuthData } = AuthSlice.actions;

export default AuthSlice.reducer;
