import React, { useState } from "react";
import "../../css/Products/Products.css";
import ProductModal from "../ProductModal/ProductModal";
import Bounce from "react-reveal/Bounce";

const Products = (props) => {
  const [product, setProduct] = useState("");

  const openModel = (product) => {
    setProduct(product);
  };

  const closeModal = () => {
    setProduct(false);
  };

  return (
    <Bounce cascade>
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
            <button
              onClick={() => props.addToCart(product)}
              className="product__btn"
            >
              Add To Cart
            </button>
          </div>
        ))}

        <ProductModal product={product} closeModal={closeModal} />
      </div>
    </Bounce>
  );
};

export default Products;
