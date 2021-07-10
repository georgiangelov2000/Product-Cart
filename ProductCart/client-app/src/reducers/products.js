import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,

  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL,
} from "../types/types";

const initialState = {
  products: null,
  product: [],
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

export const getProductDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_REQUEST:
      return { loading: true, ...state };
    case GET_PRODUCT_SUCCESS:
      return { loading: false, product: action.payload };
    case GET_PRODUCT_FAIL:
      return { loading: false, errors: action.payload, product: null };
    default:
      return state;
  }
};
