import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
//   newProductReducer,
  productDetailsReducer,
//   productsReducer,
  productReducer,
} from "../reducers/productReducer";

import {categoryReducer} from '../reducers/categoryReducer';
import {authReducer} from '../reducers/authReducer'

const reducer = combineReducers({
  auth:authReducer,
  category: categoryReducer,
//   products: productsReducer,
  productDetails: productDetailsReducer, 
//   newProduct: newProductReducer,
  product: productReducer,
  
});

let initialState = {
  
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
