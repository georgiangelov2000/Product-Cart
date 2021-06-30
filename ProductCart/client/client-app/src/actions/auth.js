import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  REGISTER_REQUEST,
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
