import { ActionTypes } from "../contants/action-types";
const initailState = {
  products: [
    {
      id: 1,
      title: "rased",
      category: "programmmer",
    },
  ],
};
export const productReducer = (state = initailState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return state;

    default:
      return state;
  }
};
