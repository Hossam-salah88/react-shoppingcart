import React, { useState } from "react";
import "../../css/Cart/Cart.css";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";

const Cart = (props) => {
  const [showForm, setShowForm] = useState(false);
  return (
    <Zoom>
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
            <Bounce top cascade>
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
            </Bounce>
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
    </Zoom>
  );
};

export default Cart;
