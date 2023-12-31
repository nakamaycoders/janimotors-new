import {
    ADMIN_PRODUCT_REQUEST,
    ADMIN_PRODUCT_SUCCESS,
    ADMIN_PRODUCT_FAIL,
    GET_PRODUCT_BY_SLUG,
    GET_PRODUCT_DETAILS_REQUEST,
    GET_PRODUCT_DETAILS_SUCCESS,
    GET_PRODUCT_DETAILS_FAIL,
    NEW_PRODUCT_REQUEST,
    NEW_PRODUCT_SUCCESS,
    NEW_PRODUCT_FAIL,
    NEW_PRODUCT_RESET,
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAIL,
    UPDATE_PRODUCT_RESET,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAIL,
    DELETE_PRODUCT_RESET,
    CLEAR_ERRORS,
    UPLOAD_IMAGES_REQUEST,
  UPLOAD_IMAGES_SUCCESS,
  UPLOAD_IMAGES_FAIL,
  } from "../constants/productConstants";
  
  //cloudinary
  export const uploadImagesReducer = (state = { loading: false, images: [] }, action) => {
    {  console.log(action)}
    switch (action.type) {
    
      case UPLOAD_IMAGES_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case UPLOAD_IMAGES_SUCCESS:
        return {
          loading: false,
          images: action.payload,
        };
      case UPLOAD_IMAGES_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;

      }
  };

  
  export const productReducer = (state = { loading: false, products: [] }, action) => {
      switch (action.type) {
          case ADMIN_PRODUCT_REQUEST:
            return {
              loading: true,
              products: [],
            };
          case ADMIN_PRODUCT_SUCCESS:
            return {
              loading: false,
              products: action.payload,
            };
          case ADMIN_PRODUCT_FAIL:
            return {
              loading: false,
              error: action.payload,
            };
          case GET_PRODUCT_BY_SLUG:
            return{
              loading:false,
              products: [...action.payload]
            }
          case CLEAR_ERRORS:
            return {
              ...state,
              error: null,
            };
          default:
            return state;
        }
      };
  

      export const newProductReducer = (state = { product: {} }, action) => {
        switch (action.type) {
          case NEW_PRODUCT_REQUEST:
            return {
              ...state,
              loading: true,
            };
          case NEW_PRODUCT_SUCCESS:
            return {
              loading: false,
              success: true,
              product: action.payload.product,
            };
          case NEW_PRODUCT_FAIL:
            return {
              ...state,
              success: false,
              loading: false,
              error: action.payload,
            };
          case NEW_PRODUCT_RESET:
            return {
              ...state,
              success: false,
            };
          case CLEAR_ERRORS:
            return {
              ...state,
              error: null,
            };
          default:
            return state;
        }
      };
      
  
      export const productDetailsReducer = (state = { product: {} }, action) => {
        switch (action.type) {
            case GET_PRODUCT_DETAILS_REQUEST:
              return {
                loading: true,
                ...state
              };
            case GET_PRODUCT_DETAILS_SUCCESS:
              return {
                loading: false,
                product: action.payload,
              };
            case GET_PRODUCT_DETAILS_FAIL:
              return {
                loading: false,
                error: action.payload,
              };
            case CLEAR_ERRORS:
              return {
                ...state,
                error: null,
              };
            default:
              return state;
          }
        };

        export const productsReducer = (state = {}, action) => {
          switch (action.type) {
            case DELETE_PRODUCT_REQUEST:
            case UPDATE_PRODUCT_REQUEST:
              return {
                ...state,
                loading: true,
              };
            case DELETE_PRODUCT_SUCCESS:
              return {
                ...state,
                loading: false,
                isDeleted: action.payload,
              };
        
            case UPDATE_PRODUCT_SUCCESS:
              return {
                ...state,
                loading: false,
                isUpdated: action.payload,
              };
            case DELETE_PRODUCT_FAIL:
            case UPDATE_PRODUCT_FAIL:
              return {
                ...state,
                loading: false,
                error: action.payload,
              };
            case DELETE_PRODUCT_RESET:
              return {
                ...state,
                isDeleted: false,
              };
            case UPDATE_PRODUCT_RESET:
              return {
                ...state,
                isUpdated: false,
              };
            case CLEAR_ERRORS:
              return {
                ...state,
                error: null,
              };
            default:
              return state;
          }
        };