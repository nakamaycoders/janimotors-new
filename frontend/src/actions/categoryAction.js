import axios from "../helpers/axios";
import {
  GET_ALL_CATEGORIES_REQUEST,
  GET_ALL_CATEGORIES_SUCCESS,
  GET_ALL_CATEGORIES_FAILURE,
} from "../constants/categoryConstants";

export const getAllCategory = () => {
  return async (dispatch) => {
    dispatch({ type: GET_ALL_CATEGORIES_REQUEST });
    const res = await axios.get(`/category/getcategories`);
    // console.log(res);
    if (res.status === 200) {
      const { categoryList } = res.data;
      
      dispatch({
        type: GET_ALL_CATEGORIES_SUCCESS,
        payload: { categories: categoryList },
      });
    } else {
      dispatch({
        type: GET_ALL_CATEGORIES_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};
