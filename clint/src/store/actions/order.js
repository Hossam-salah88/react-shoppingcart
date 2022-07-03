import { CLEAR_CART, CLEAR_ORDER, CREAT_ORDER } from "./types";

export const creatOrder = (order) => {
  return (dispatch) => {
    fetch("/api/orders", {
      method: "post",
      headers: {
        "content-Type": "application/json",
      },

      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: CREAT_ORDER,
          data: {
            order: data,
          },
        });
      });
    localStorage.clear("cardItems");
    dispatch({ type: CLEAR_CART });
  };
};

export const clearOrder = () => {
  return (dispatch) => {
    dispatch({
      type: CLEAR_ORDER,
    });
  };
};
