import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  REGISTER_REQUEST,
  
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,

  LOGOUT
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
        isAuthenticated:false,
        user:null,
        error:payload
      }

    //Logout types
    case LOGOUT:{
      return {
        ...state,
        isAuthenticated:false,
        user:null,
        error: null
      }
    }

    default:
      return state;
  }
}

export default authReducer;
