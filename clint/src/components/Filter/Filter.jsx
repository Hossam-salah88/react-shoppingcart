import React from "react";
import "../../css/Filter/Filter.css";
const Filter = (props) => {
  return (
    <div className="filter">
      <h1 className="filter__title">Filter</h1>
      <div className="filter__productNum">Number of product 4</div>
      <div className="filter__size">
        <span className="filter__size--title">Filter</span>
        <select className="filter__selectSize">
          <option value="ALL">ALL</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>
      <div className="filter__size">
        <span>Order</span>
        <select className="filter__selectSize">
          <option value="lastes">Lastes</option>
          <option value="lower">Lower</option>
          <option value="highest">Highest</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
