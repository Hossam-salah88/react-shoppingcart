import React from "react";
import { useState } from "react";
import "../../css/CheckoutForm/ChechoutForm.css";
import Slide from "react-reveal/Slide";
import Modal from "react-modal";
import { connect } from "react-redux";

const CheckoutForm = (props) => {
  const [value, setValue] = useState("");
  const [order, setOrder] = useState(false);

  const handelFormSubmit = (e) => {
    e.preventDefault();
    const order = {
      name: value.name,
      email: value.email,
    };
    setOrder(order);
  };

  const handelFormChange = (e) => {
    setValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const closeModal = () => {
    setOrder(false);
  };

  return (
    <div>
      {" "}
      <Slide right>
        <div className="checkout__container">
          <span
            onClick={() => props.setShowForm(false)}
            className="checkout__close"
          >
            &times;
          </span>
          <form onSubmit={handelFormSubmit} className="checkout__form">
            <div>
              <label>Name</label>
              <input
                onChange={handelFormChange}
                type="text"
                required
                name="name"
              />
            </div>

            <div>
              <label>Email</label>
              <input
                onChange={handelFormChange}
                type="email"
                required
                name="email"
              />
            </div>

            <div>
              <button className="cart__btn" type="submit">
                Checkout
              </button>
            </div>
          </form>
        </div>
      </Slide>
      <Modal isOpen={order} onRequestClose={closeModal}>
        <div className="order">
          <span className="order__closeBtn" onClick={closeModal}>
            &times;
          </span>
          <p className="order__success">Order done sucsess</p>
          <table>
            <tr>
              <td>Name:</td>
              <td>{order.name}</td>
            </tr>

            <tr>
              <td>Email:</td>
              <td>{order.email}</td>
            </tr>

            <tr>
              <td>Total:</td>
              <td>
                {props.cartItems.reduce((acc, p) => {
                  return acc + p.price;
                }, 0)}
              </td>
            </tr>

            <tr>
              <td>selectd item</td>
              <td>
                {props.cartItems.map((p) => (
                  <div className="order__cart">
                    <div className="order__data">
                      <p>Number of this products: {p.qty}</p>
                      <p>Tiitle of this products: {p.title}</p>
                    </div>
                  </div>
                ))}
              </td>
            </tr>
          </table>
        </div>
      </Modal>
    </div>
  );
};

export default connect((state) => {
  return {
    cartItems: state.cart.cartItems,
  };
})(CheckoutForm);
