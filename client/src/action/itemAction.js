import { ADD_ITEM, GET_ITEMS, DELETE_ITEM } from "./index";

export const getItems = () => {
  return {
    type: GET_ITEMS
  };
};

export const getItem = item => {
  return {
    type: ADD_ITEM,
    payload: item
  };
};

export const deleteItem = id => {
    return {
      type: DELETE_ITEM,
      payload: id
    };
  };
  
