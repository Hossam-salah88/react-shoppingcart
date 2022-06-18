import React, { useState } from "react";
import Modal from "react-modal";

const ProductModal = (props) => {
  const { product, closeModal } = props;

  return (
    <Modal isOpen={product} on onRequestClose={closeModal}>
      <span className="model__closebtn" onClick={closeModal}>
        &times;
      </span>
      <div className="model">
        <img className="model__img" src={product.imgUrl} alt={product.title} />
        <p className="model__title">{product.title}</p>
        <p className="model__price">{product.price}</p>
      </div>
    </Modal>
  );
};

export default ProductModal;
