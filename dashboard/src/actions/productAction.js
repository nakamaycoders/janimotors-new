import axios from "../helpers/axios";
import Axios from "axios"
import {
  GET_PRODUCT_BY_SLUG,
  GET_PRODUCT_DETAILS_REQUEST,
  GET_PRODUCT_DETAILS_SUCCESS,
  GET_PRODUCT_DETAILS_FAIL,
  ADMIN_PRODUCT_REQUEST,
  ADMIN_PRODUCT_SUCCESS,
  ADMIN_PRODUCT_FAIL,
  NEW_PRODUCT_REQUEST,
  NEW_PRODUCT_SUCCESS,
  NEW_PRODUCT_FAIL,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAIL,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
  UPLOAD_IMAGES_REQUEST,
  UPLOAD_IMAGES_SUCCESS,
  UPLOAD_IMAGES_FAIL,

  CLEAR_ERRORS,
} from "../constants/productConstants";


// Action to upload images to Cloudinary
export const uploadImages = (data) => async (dispatch) => {
  try {
    dispatch({ type: UPLOAD_IMAGES_REQUEST });

    // const formData = new FormData();
    // images.forEach((image) => formData.append("images", image));

    const config = {
      headers: {
        Authorization: localStorage.getItem("token")
          ? "Bearer " + localStorage.getItem("token")
          : null,
        "Content-Type": "multipart/form-data", // Set the correct Content-Type header
      },
    };
    

    const formData = new FormData();
      for (let i = 0; i < data.length; i++) {
        formData.append("images", data[i]);
      }

    const response = await Axios.post("https://janimotors-api.onrender.com/api/upload/", formData, config);
    console.error("heelloo this res",response)
    dispatch({
      type: UPLOAD_IMAGES_SUCCESS,
      payload: response.data.images,
    });
  } catch (error) {
    dispatch({
      type: UPLOAD_IMAGES_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message, 
    });
  }
};


/// Get All Products For Admin
export const getAdminProduct = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_PRODUCT_REQUEST });

    const { data } = await axios.get("/admin/products");

    dispatch({
      type: ADMIN_PRODUCT_SUCCESS,
      payload: data.products,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Create Product
export const createProduct = (productData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_PRODUCT_REQUEST });

    // const config = {
    //   headers: { "Content-Type": "multipart/form-data" },
    // };
    const config = {
      headers: {
      //   Authorization: localStorage.getItem("token")
      //     ? "Bearer " + localStorage.getItem("token")
      //     : null,
        "Content-Type": "application/json", // Set the correct Content-Type header
      }
    };
    const { data } = await Axios.post(
      `https://janimotors-api.onrender.com/api/admin/product/new`,
      productData,
      config
    );

    console.log(data)
    dispatch({
      type: NEW_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

//get Product by Slug
  export const getProductsBySlug = (slug) => {
    return async (dispatch) => {
        const {data} = await axios.get(`/products/${slug}`);
        console.log(data)
        dispatch({
            type: GET_PRODUCT_BY_SLUG,
            payload: data.product
        });
        // if (res.status === 200) {
        // } else {
            // dispatch({
            //     type: 
            // })
        // }
    }
}

// Get ProductDetails
export const getProductDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: GET_PRODUCT_DETAILS_REQUEST });
      // const { productId } = payload.params;
      const { data } = await axios.get(`/product/${id}`);
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

  // Delete Product
export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_PRODUCT_REQUEST });

    const { data } = await axios.delete(`/admin/product/${id}`);

    dispatch({
      type: DELETE_PRODUCT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

  
// Update Product
export const updateProduct = (id, productData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PRODUCT_REQUEST });
    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/admin/product/${id}`,
      productData,
      config
    );

    dispatch({
      type: UPDATE_PRODUCT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};