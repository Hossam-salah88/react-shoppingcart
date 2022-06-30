import React from "react";
import "../../css/Filter/Filter.css";
import Zoom from "react-reveal/Zoom";
import { connect } from "react-redux";
import { filterSize, filterSort } from "../../store/actions/products";
const Filter = (props) => {
  return (
    <Zoom>
      {props.productfilter && (
        <div className="filter">
          <h1 className="filter__title">Filter</h1>
          <div className="filter__productNum">
            Number of product {props.productfilter.length}
          </div>
          <div className="filter__size">
            <span className="filter__size--title">Filter</span>
            <select
              className="filter__selectSize"
              onChange={(e) => props.filterSize(props.products, e.target.value)}
              value={props.size}
            >
              <option value="ALL">ALL</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
          </div>
          <div
            className="filter__size"
            onChange={(e) =>
              props.filterSort(props.productfilter, e.target.value)
            }
            value={props.sort}
          >
            <span className="filter__size--title">Order</span>
            <select className="filter__selectSize">
              <option value="lastes">Lastes</option>
              <option value="lower">Lower</option>
              <option value="highest">Highest</option>
            </select>
          </div>
        </div>
      )}
    </Zoom>
  );
};

export default connect(
  (state) => {
    return {
      size: state.products.size,
      sort: state.products.sort,
      products: state.products.products,
      productfilter: state.products.productfilter,
    };
  },
  { filterSize, filterSort }
)(Filter);
