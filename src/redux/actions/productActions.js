import miniShopApi from "../../apis/miniShopApi";
import { ActionTypes } from "../contants/action-types";
export const fetchProducts = () => {
  return async (dispatch) => {
    const response = await miniShopApi.get("/products");
    dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
  };
};
export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};
export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeselectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
