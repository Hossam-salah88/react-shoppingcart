import React from "react";
import "../../css/Cart/Cart.css";

const Cart = (props) => {
  return (
    <div className="cart">
      <h2 className="cart__title">
        {props.cartItem.length ? (
          <p>There is {props.cartItem.length} products in card</p>
        ) : (
          "The Cart is empty"
        )}
      </h2>
      <div className="cart__container">
        {props.cartItem.map((item) => (
          <div className="cart__item" key={item.id}>
            <img className="cart__img" src={item.imgUrl} alt={item.title} />
            <div className="cart__content">
              <div className="cart__info">
                <p>title: {item.title}</p>
                <p>qun: {item.qty}</p>
                <p>price: ${item.price}</p>
              </div>
              <button
                onClick={() => {
                  props.removeproduct(item);
                }}
                className="cart__btn"
              >
                remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
