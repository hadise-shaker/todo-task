import { ActionTypes } from "../types/actionTypes";

const initialState = {
  users: {},
  /*   selectedProduct: {},
  productsByCategory: {},
  loading: true, */
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    /*     case ActionTypes.SET_PRODUCT:
      return { ...state.products, products: payload }; */
    case ActionTypes.ADD_USER:
      return { ...state.users, users: payload };

    case ActionTypes.REMOVE_USER:
      return {
        users: state.users.filter(({ id }) => id !== payload),
      };
    case ActionTypes.EDIT_USER:
      return [...state.users, payload];

    /*     case ActionTypes.SELECTED_PRODUCT:
      return { ...state.products, selectedProduct: payload };

    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {
        ...state,
        products: state.products.filter(({ id }) => id !== payload),
      };

    case ActionTypes.SET_PRODUCTS_BY_CATEGORY:
      return {
        ...state,
        productsByCategory: state.products.filter(
          (item) => item.category === payload
        ),
      }; */

    default:
      return state;
  }
};
