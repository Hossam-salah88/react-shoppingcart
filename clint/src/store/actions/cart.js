import { ADD_CART, REMOVE_CART } from "./types";

export const addCart = (product) => {
  return (dispatch, getState) => {
    const cartItems = getState().cart.cartItems;
    const cardItemsClone = [...cartItems];
    let isProductExist = false;
    cardItemsClone.forEach((p) => {
      if (p._id === product._id) {
        p.qty++;

        isProductExist = true;
      }
    });
    if (!isProductExist) {
      cardItemsClone.push({ ...product, qty: 1 });
    }

    dispatch({
      type: ADD_CART,
      data: {
        cartItems: cardItemsClone,
      },
    });
    localStorage.setItem("cardItems", JSON.stringify(cardItemsClone));
  };
};

export const removeCart = (product) => {
  return (dispatch, getState) => {
    const cartItems = getState().cart.cartItems;
    const cardItemsClone = [...cartItems];
    const updatedCartItems = cardItemsClone.filter(
      (p) => p._id !== product._id
    );

    dispatch({
      type: REMOVE_CART,
      data: {
        cartItems: updatedCartItems,
      },
    });
    localStorage.setItem("cardItems", JSON.stringify(updatedCartItems));
  };
};
