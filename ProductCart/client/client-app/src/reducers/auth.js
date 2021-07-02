import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  REGISTER_REQUEST,

  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  UPDATE_USER_RESET,
  
  LOGOUT,
} from "../types/types";

const initialState = {
  isAuthenticated: null,
  user: null,
  error: null,
  loading: false,
};

function authReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    //Details for User
    case USER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload,
      };
    case USER_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    //Register types
    case REGISTER_REQUEST:
      return {
        loading: false,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: payload,
        loading: false,
      };

    case REGISTER_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: payload,
      };

    //Login types

    case LOGIN_REQUEST:
      return {
        loading: false,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: payload,
        error: null,
      };

    case LOGIN_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: payload,
      };

    //Logout types
    case LOGOUT: {
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: null,
      };
    }
    default:
      return state;
  }
}

export default authReducer;
