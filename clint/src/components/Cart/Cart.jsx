import React, { useState } from "react";
import "../../css/Cart/Cart.css";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";
import { connect } from "react-redux";
import { removeCart } from "../../store/actions/cart";
import { words } from "../../words";

const Cart = (props) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <Zoom>
      <div className="cart">
        <h2 className="cart__title">
          {props.cartItems.length ? (
            <p>
              {" "}
              {words.cartHeder} {props.cartItems.length}
            </p>
          ) : (
            "The Cart is empty"
          )}
        </h2>
        <div className="cart__container">
          {props.cartItems.map((item) => (
            <Bounce top cascade>
              <div className="cart__item" key={item.id}>
                <img className="cart__img" src={item.imgUrl} alt={item.title} />
                <div className="cart__content">
                  <div className="cart__info">
                    <p>
                      {words.cartTitle} {item.title}
                    </p>
                    <p>
                      {words.cartQun} {item.qty}
                    </p>
                    <p>
                      {" "}
                      {words.cartPrice} {item.price}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      props.removeCart(item);
                    }}
                    className="cart__btn"
                  >
                    {words.cardRemoveBtn}
                  </button>
                </div>
              </div>
            </Bounce>
          ))}
        </div>
        {props.cartItems.length ? (
          <div className="cart__footer">
            <div className="cart__total">
              {words.cartTotal}{" "}
              {props.cartItems.reduce((acc, p) => {
                return acc + p.price * p.qty;
              }, 0)}
            </div>
            <button on onClick={() => setShowForm(true)} className="cart__btn">
              {words.selectProductBtn}
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

export default connect(
  (state) => {
    return {
      order: state.order.order,
      cartItems: state.cart.cartItems,
    };
  },
  { removeCart }
)(Cart);
