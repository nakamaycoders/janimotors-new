 import axios from "../helpers/axios";
import { categoryConstants } from "./constants";

export const createCategory = (form) => {
  return async dispatch => {
    dispatch({ type: categoryConstants.CREATE_NEW_CATEGORIES_REQUEST });
    try {
      const res = await axios.post("/category/create", form);
      if (res.status === 201) {
        dispatch({
          type: categoryConstants.CREATE_NEW_CATEGORIES_SUCCESS,
          payload: { category: res.data.category },
        });
      } else {
        dispatch({
          type: categoryConstants.CREATE_NEW_CATEGORIES_FAILED,
          payload: res.data.error,
        });
      }
    } catch (error) {
      console.log(error.response);
    }
  };
};

const getCategory = () => {
  return async (dispatch) => {
    dispatch({ type: categoryConstants.GET_ALL_CATEGORIES_REQUEST });
    const res = await axios.get("/category/getCategories");
    if (res.status === 200) {
      const { categoryList } = res.data;
      dispatch({
        type: categoryConstants.GET_ALL_CATEGORIES_SUCCESS,
        payload: { categories: categoryList },
      });
    } else {
      dispatch({
        type: categoryConstants.GET_ALL_CATEGORIES_FAILED,
        payload: { error: res.data.error },
      });
    }
  };
};

export const updateCategories = (form) => {
  return async (dispatch) => {
    dispatch({ type: categoryConstants.UPDATE_CATEGORIES_REQUEST });
    const res = await axios.post(`/category/update`, form);
    if (res.status === 201) {
      dispatch({ type: categoryConstants.UPDATE_CATEGORIES_SUCCESS });
      dispatch(getCategory());
    } else {
      const { error } = res.data;
      dispatch({
        type: categoryConstants.UPDATE_CATEGORIES_FAILURE,
        payload: { error }
      });
    }
  };
};

export const deleteCategories = (ids) => {
  return async dispatch => {
    dispatch({ type: categoryConstants.DELETE_CATEGORIES_REQUEST });
    const res = await axios.post(`/category/delete`, {
      payload: {
        ids
      }
    });
    if (res.status === 201) {
      dispatch(getCategory());
      dispatch({ type: categoryConstants.DELETE_CATEGORIES_SUCCESS });
    } else {
      const { error } = res.data;
      dispatch({
        type: categoryConstants.DELETE_CATEGORIES_FAILURE,
        payload: { error }
      });
    }
  };
};

export {
  getCategory
}