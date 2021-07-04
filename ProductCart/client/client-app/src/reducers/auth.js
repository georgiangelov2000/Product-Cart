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

  UPDATE_USER_DETAILS_REQUEST,
  UPDATE_USER_DETAILS_SUCCESS,
  UPDATE_USER_DETAILS_FAIL,

  UPDATE_USER_RESET,

  LOGOUT,
} from "../types/types";

const initialState = {
  isAuthenticated: null,
  user: null,
  error: null,
  loading: false,
};


export const userLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return { ...state, isAuthenticated: true, user: action.payload, error: null };
    case LOGIN_FAIL:
      return { ...state, isAuthenticated: false, user: null, error: action.payload };
    case LOGOUT:
      return { ...state, isAuthenticated: false, user: null, error: null };
    default:
      return state;
  }
};

export const userRegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { loading: true };
    case REGISTER_SUCCESS:
      return { ...state, isAuthenticated: true, user: action.payload, loading: false };
    case REGISTER_FAIL:
      return { ...state, isAuthenticated: false, user: null, error: action.payload };
    case LOGOUT:
      return { ...state, isAuthenticated: false, user: null, error: null };
    default:
      return state;
  }
};

export const userDetailsReducer = (state = { currentUser: {} }, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { ...state, loading: true };
    case USER_DETAILS_SUCCESS:
      return { loading: false, currentUser: action.payload };
    case USER_DETAILS_FAIL:
      return { loading: false, error: action.payload,currentUser:null };
    default:
      return state;
  }
};

export const userUpdateReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_DETAILS_REQUEST:
      return { loading: true }
    case UPDATE_USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload }
    case UPDATE_USER_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    case UPDATE_USER_RESET:
      return {}
    default:
      return state;
  }
}