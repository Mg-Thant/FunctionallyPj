import { createContext, useReducer } from "react";

const initialState = {
  items: [],
  totalAmount: 0,
};

const itemReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const existCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existCartItem = state.items[existCartItemIndex];
    let updatedItems;
    if (existCartItem) {
      const updatedItem = {
        ...existCartItem,
        amount: existCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE_ITEM") {
    const existCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existCartItem = state.items[existCartItemIndex];
    const updatedTotalAmount =
    state.totalAmount - existCartItem.price;

    let updatedItems;
    if(existCartItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id);
    }else {
      const updatedItem = {...existCartItem, amount: existCartItem.amount - 1 }
      updatedItems = [...state.items];
      updatedItems[existCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    }
  }

  return initialState;
};

export const itemContex = createContext(null);

const ItemContexProvider = (props) => {
  const [itemState, itemDispatch] = useReducer(itemReducer, initialState);

  const addItemHandler = (item) => {
    itemDispatch({ type: "ADD_ITEM", item });
  };

  const removeItemHandler = (id) => {
    itemDispatch({ type: "REMOVE_ITEM", id });
  };

  const itemCtx = {
    items: itemState.items,
    totalAmount: itemState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <itemContex.Provider value={itemCtx}>{props.children}</itemContex.Provider>
  );
};

export default ItemContexProvider;
