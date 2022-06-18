import React, { useState } from "react";
import "../../css/Products/Products.css";
import ProductModal from "../ProductModal/ProductModal";

const Products = (props) => {
  const [product, setProduct] = useState("");

  const openModel = (product) => {
    setProduct(product);
  };

  const closeModal = () => {
    setProduct(false);
  };

  return (
    <div className="wrapper__product product">
      {props.products.map((product) => (
        <div key={product.id} className="product__item">
          <a href="#">
            <img
              className="product__img"
              src={product.imgUrl}
              alt={product.title}
              onClick={() => openModel(product)}
            />
          </a>
          <div className="product__des">
            <p className="product__title">{product.title}</p>
            <span className="product__subtitle">{product.price}</span>
          </div>
          <button className="product__btn">Add To Cart</button>
        </div>
      ))}

      <ProductModal product={product} closeModal={closeModal} />
    </div>
  );
};

export default Products;
