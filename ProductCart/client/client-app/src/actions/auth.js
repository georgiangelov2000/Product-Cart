import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,

  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,

  UPDATE_USER_RESET,
  LOGOUT,
} from "../types/types";
import axios from "axios";



export const register = (username, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: REGISTER_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post(
      "http://localhost:5000/api/users/register",
      { username, email, password },
      config
    );

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

    localStorage.setItem("user", JSON.stringify(res.data));
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post(
      "http://localhost:5000/api/users/login",
      { email, password },
      config
    );

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    localStorage.setItem("user", JSON.stringify(res.data));
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getUserDetails = (id) => async (dispatch) => {
  
  if (localStorage("user")) {
    localStorage.setItem('user')
  }

  try {
    
    dispatch({
      type: USER_DETAILS_REQUEST,
    });

     
    const config = {
      headers: {
        Authorization: `Bearer ${user}`,
      },
    }

    const res = await axios.get(
      `http://localhost:5000/api/users/user/profile/${id}`,
      config
    );
    console.log(res.data);

    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: res.data,
    });

    localStorage.setItem("user", JSON.stringify(res.data));
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload: error,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("user");
  dispatch({
    type: LOGOUT,
  });
  document.location.href = "/login";
};
