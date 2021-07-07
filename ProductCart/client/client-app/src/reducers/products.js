import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
} from "../types/types";

const initialState = {
  products: null,
  errors: null,
  loading: false,
};

export const getProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return { ...state, loading: true };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        errors: null,
        loading: false,
      };
    case GET_PRODUCTS_FAIL:
      return {
        ...state,
        errors: action.payload,
        loading: false,
        products: null,
      };
    default:
      return state;
  }
};
