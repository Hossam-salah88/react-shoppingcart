import React from "react";
import { useState } from "react";
import "../../css/CheckoutForm/ChechoutForm.css";

const CheckoutForm = (props) => {
  const [value, setValue] = useState("");

  const handelFormSubmit = (e) => {
    e.preventDefault();
    const order = {
      name: value.name,
      email: value.email,
    };
    console.log(order);
  };

  const handelFormChange = (e) => {
    setValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      {" "}
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
    </div>
  );
};

export default CheckoutForm;
