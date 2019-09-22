import { ADD_ITEM, GET_ITEMS, DELETE_ITEM, LOADING_ITEMS } from "./index";
import axois from "axios";

export const getItems = () => dispatch => {
  dispatch(setLoadingItems());
  axois.get("./api/items").then(res =>
    dispatch({
      type: GET_ITEMS,
      payload: res.data
    })
  );
};

export const addItem = item => dispatch => {
  axois.post("/api/items", item).then(res =>
    dispatch({
      type: ADD_ITEM,
      payload: res.data
    })
  );
};

export const deleteItem = id => dispatch => {
  axois.delete("/api/items/"+id).then(res =>
    dispatch({
      type: DELETE_ITEM,
      payload: id
    })
  );
};

export const setLoadingItems = () => {
  return {
    type: LOADING_ITEMS
  };
};
