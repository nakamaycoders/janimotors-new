import { 
  GET_ALL_CATEGORIES_REQUEST,
  GET_ALL_CATEGORIES_SUCCESS,
  GET_ALL_CATEGORIES_FAILURE,
  ADD_NEW_CATEGORY_REQUEST,
  ADD_NEW_CATEGORY_SUCCESS,
  ADD_NEW_CATEGORY_FAILURE
 } from "../constants/categoryConstants";

const initialState = {
  categories: [],
  loading: false,
  error: null,
};
const buildNewCategories = (parentId,categories, category) => {
  let myCategories = [];

  if(parentId === undefined){
    return [
      ...categories,
      {
        _id: category._id,
        name: category.name,
        slug: category.slug,
        children: []
      }
    ];
  }

  for (let cat of categories) {
    if(cat._id === parentId){   
      myCategories.push({
        ...cat,
        children:
          cat.children ? buildNewCategories(parentId,[...cat.children,{
              _id: category._id,
              name: category.name,
              slug: category.slug,
              parentId: category.parentId,
              children: category.children,
            }],category) : []
      });
    }
    else{
      myCategories.push({
        ...cat,
        children:
          cat.children ? buildNewCategories(parentId,cat.children,category) : []
      });
    }
  }
  return myCategories;
};


// eslint-disable-next-line import/no-anonymous-default-export
export const categoryReducer = (state = initialState, action) => {
  switch(action.type){
      case GET_ALL_CATEGORIES_SUCCESS:
          state = {
              ...state,
              categories: action.payload.categories
          }
          break;
      case ADD_NEW_CATEGORY_REQUEST:
          state = {
              ...state,
              loading: true
          }
          break;
      case ADD_NEW_CATEGORY_SUCCESS:
          const category = action.payload.category;
          const updatedCategories = buildNewCategories(category.parentId, state.categories, category);
          console.log('updated categoires', updatedCategories);
          
          state = {
              ...state,
              categories: updatedCategories,
              loading: false,
          }
          break;
      case ADD_NEW_CATEGORY_FAILURE:
          state = {
              ...initialState
          }
          break;
  }

  return state;
}