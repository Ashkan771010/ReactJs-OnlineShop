import * as types from "./actionTypes";

export const addProduct = (itemId) => {
  return {
    type: types.ADD_PRODUCT,
    payload: {
      id: itemId,
    },
  };
};

export const minusProduct = (itemId) => {
  return {
    type: types.MINUS_PRODUCT,
    payload: {
      id: itemId,
    },
  };
};

export const removeProduct = (itemId) => {
  return {
    type: types.REMOVE_PRODUCT,
    payload: {
      id: itemId,
    },
  };
};

export const removeAllProduct = (itemId) => {
  return {
    type: types.REMOVE_ALL_PRODUCT,
    payload: {
      id: itemId,
    },
  };
};
export const callApi = (products) => {
  return {
    type: types.CALL_API,
    payload: products,
  };
};
