import {
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  UPDATE_USER_RESET,
} from "../types/types";
import axios from "axios";

export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_DETAILS_REQUEST,
    });

    const {userLogin: { user },} = getState();

    const config = {
      header: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    const res = await axios.get(`http://localhost:5000/api/users/profile/${id}`,config);

    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload: error,
    });
  }
};

export default getUserDetails