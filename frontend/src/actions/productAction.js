import axios from "../helpers/axios";

import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  GET_PRODUCT_BY_SLUG_SUCCESS,
  GET_PRODUCT_BY_SLUG_REQUEST,
  GET_PRODUCT_BY_SLUG_FAIL,
  GET_PRODUCT_DETAILS_REQUEST,
  GET_PRODUCT_DETAILS_SUCCESS,
  GET_PRODUCT_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../constants/productConstants";

// Get All Products
export const getProduct =
  (keyword = "", model = "", year = "", make = "", body = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_PRODUCT_REQUEST });

      let link = `/view-all-inventories?keyword=${keyword}`;
      if (model) {
        link = `/products/model=${model}`;
      }
      if (year) {
        link = `/products/year=${year}`;
      }
      if (make) {
        link = `/products/make=${make}`;
      }
      if (body) {
        link = `/products/body=${body}`;
      }
      const { data } = await axios.get(link);

      dispatch({
        type: ALL_PRODUCT_SUCCESS,
        payload: data,
      });
      // console.log(data);
    } catch (error) {
      dispatch({
        type: ALL_PRODUCT_FAIL,
        payload: error.response.data.message,
      });
    }
  };

//get Product by Slug
export const getProductsBySlug = (slug) => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCT_BY_SLUG_REQUEST });
    const { data } = await axios.get(`/products/${slug}`);
    // console.log(data);
    dispatch({
      type: GET_PRODUCT_BY_SLUG_SUCCESS,
      payload: data.product,
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCT_BY_SLUG_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get ProductDetails
export const getProductDetails = (payload) => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCT_DETAILS_REQUEST });
    const { productId } = payload.params;
    const { data } = await axios.get(`/product/${productId}`);
    dispatch({
      type: GET_PRODUCT_DETAILS_SUCCESS,
      payload: data.product,
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCT_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
