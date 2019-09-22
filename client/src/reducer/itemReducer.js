import uuid from "uuid";
import { ADD_ITEM, GET_ITEMS, DELETE_ITEM } from "./index";

const initialState = {
  items: [
    { id: uuid(), item: "Eggs" },
    { id: uuid(), item: "Coconut" },
    { id: uuid(), item: "Milk" },
    { id: uuid(), item: "Choco" }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {

    case "GET_ITEMS":
      return {
        ...state
      };

    case "DELETE_ITEM":
      return {
        ...state,
        items: state.items.filter(itemId => itemId.id !== action.payload)
      };

    default:
      return state;
  }
}
