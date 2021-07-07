import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
} from "../types/types";
import axios from "axios";

export const getProducts = () => async (dispatch) => {
  try {

    dispatch({type: GET_PRODUCTS_REQUEST});

    const res = await axios.get("http://localhost:5000/api/products");

    dispatch({
      type: GET_PRODUCTS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCTS_FAIL,
    });
  }
};
