import React from "react";
import "../../css/Products/Products.css";

const Products = (props) => {
  console.log(props);
  return (
    <div className="wrapper__product product">
      {props.products.map((product) => (
        <div key={product.id} className="product__item">
          <img
            className="product__img"
            src={product.imgUrl}
            alt={product.title}
          />
          <div className="product__des">
            <p className="product__title">{product.title}</p>
            <span className="product__subtitle">{product.price}</span>
          </div>
          <button className="product__btn">Add To Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
