import React from "react";
import { useState } from "react";
import "../../css/CheckoutForm/ChechoutForm.css";
import Slide from "react-reveal/Slide";
import OrderModel from "../orderModel/OrderModel";

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
      <OrderModel order={order} closeModal={closeModal} />
    </div>
  );
};

export default CheckoutForm;
