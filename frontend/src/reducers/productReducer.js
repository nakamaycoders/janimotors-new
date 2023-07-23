import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  ADMIN_PRODUCT_REQUEST,
  ADMIN_PRODUCT_SUCCESS,
  ADMIN_PRODUCT_FAIL,
  GET_PRODUCT_DETAILS_REQUEST,
  GET_PRODUCT_DETAILS_SUCCESS,
  GET_PRODUCT_DETAILS_FAIL,
  GET_PRODUCT_BY_SLUG_REQUEST,
  GET_PRODUCT_BY_SLUG_SUCCESS,
  GET_PRODUCT_BY_SLUG_FAIL,
  // NEW_PRODUCT_REQUEST,
  // NEW_PRODUCT_SUCCESS,
  // NEW_PRODUCT_FAIL,
  // NEW_PRODUCT_RESET,
  // UPDATE_PRODUCT_REQUEST,
  // UPDATE_PRODUCT_SUCCESS,
  // UPDATE_PRODUCT_FAIL,
  // UPDATE_PRODUCT_RESET,
  // DELETE_PRODUCT_REQUEST,
  // DELETE_PRODUCT_SUCCESS,
  // DELETE_PRODUCT_FAIL,
  // DELETE_PRODUCT_RESET,
  CLEAR_ERRORS,
} from "../constants/productConstants";

export const productReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case ALL_PRODUCT_REQUEST:
        case ADMIN_PRODUCT_REQUEST:
          return {
            loading: true,
            products: [],
          };
        case ALL_PRODUCT_SUCCESS:
          return {
            loading: false,
            products: action.payload.products,
            // productsCount: action.payload.productsCount,
            // resultPerPage: action.payload.resultPerPage,
            // filteredProductsCount: action.payload.filteredProductsCount,
          };
        case ADMIN_PRODUCT_SUCCESS:
          return {
            loading: false,
            products: action.payload,
          };
        case ALL_PRODUCT_FAIL:
        case ADMIN_PRODUCT_FAIL:
          return {
            loading: false,
            error: action.payload,
          };

          // --------------------
          // --------------------

        case GET_PRODUCT_BY_SLUG_REQUEST:
          return{
            loading:true,
            products: []
          }
        case GET_PRODUCT_BY_SLUG_SUCCESS:
          return{
            loading:false,
            products: [...action.payload]
          }
        case GET_PRODUCT_BY_SLUG_FAIL:
          return{
            loading:false,
            error: action.payload,
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