import { FETCH_PRODUCTS, FILTER_BY_SIZE, FILTER_BY_SORT } from "./types";

export const fetchProduct = () => {
  return (dispatch) => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: FETCH_PRODUCTS,
          data: data,
        });
      });
  };
};

export const filterSize = (products, value) => {
  return (dispatch) => {
    let productClone = [...products];
    let newProducts = productClone.filter((p) => p.sizes.indexOf(value));
    dispatch({
      type: FILTER_BY_SIZE,
      data: {
        size: value,
        products: value == "ALL" ? products : newProducts,
      },
    });
  };
};

export const filterSort = (products, value) => {
  return (dispatch) => {
    let productClone = [...products];
    let newProducts = productClone.sort(function (a, b) {
      if (value === "lower") {
        return a.price - b.price;
      } else if (value === "highest") {
        return b.price - a.price;
      } else if (value === "lastes") {
        return a.id < b.id ? 1 : -1;
      }
    });

    dispatch({
      type: FILTER_BY_SORT,
      data: {
        sort: value,
        products: newProducts,
      },
    });
  };
};
