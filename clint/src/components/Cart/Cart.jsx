import React, { useState } from "react";
import "../../css/Cart/Cart.css";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const Cart = (props) => {
  const [showForm, setShowForm] = useState(false);
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
      {props.cartItem.length ? (
        <div className="cart__footer">
          <div className="cart__total">
            Total: ${" "}
            {props.cartItem.reduce((acc, p) => {
              return acc + p.price * p.qty;
            }, 0)}
          </div>
          <button on onClick={() => setShowForm(true)} className="cart__btn">
            Select Product
          </button>
        </div>
      ) : (
        <div className="cart__zero"> Total: 0 $ </div>
      )}

      {showForm && <CheckoutForm setShowForm={setShowForm} />}
    </div>
  );
};

export default Cart;
