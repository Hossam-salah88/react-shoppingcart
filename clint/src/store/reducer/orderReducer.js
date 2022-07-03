import { CLEAR_ORDER, CREAT_ORDER } from "../actions/types";

export const orderREducer = (state = {}, action) => {
  switch (action.type) {
    case CREAT_ORDER:
      return {
        order: action.data.order,
      };

    case CLEAR_ORDER:
      return {
        order: false,
      };

    default:
      return state;
  }
};
