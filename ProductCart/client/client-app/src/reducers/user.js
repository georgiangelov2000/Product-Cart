import {
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  UPDATE_USER_RESET,
} from "../types/types";

const initialState = {
  isAuthenticated: null,
  userDetails: null,
  error: null,
  loading: false,
};

function profileReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case USER_DETAILS_SUCCESS:
      return {
        isAuthenticated: true,
        userDetails: payload,
        error: null,
        loading: false,
      };
    case USER_DETAILS_FAIL:
      return {
        isAuthenticated: false,
        userDetails: null,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
}

export default profileReducer;
