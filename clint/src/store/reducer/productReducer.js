import {
  FETCH_PRODUCTS,
  FILTER_BY_SIZE,
  FILTER_BY_SORT,
} from "../actions/types";

export const productRducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { products: action.data, productfilter: action.data };

    case FILTER_BY_SIZE:
      return {
        ...state,
        size: action.data.size,
        productfilter: action.data.products,
      };

    case FILTER_BY_SORT:
      return {
        ...state,
        sort: action.data.sort,
        productfilter: action.data.products,
      };

    default:
      return state;
  }
};
