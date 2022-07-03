import React from "react";
import { useState } from "react";
import "../../css/CheckoutForm/ChechoutForm.css";
import Slide from "react-reveal/Slide";
import OrderModel from "../orderModel/OrderModel";
import { creatOrder, clearOrder } from "../../store/actions/order";
import { connect } from "react-redux";
import { words } from "../../words";

const CheckoutForm = (props) => {
  const [value, setValue] = useState("");

  const handelFormSubmit = (e) => {
    e.preventDefault();
    const order = {
      name: value.name,
      email: value.email,
    };
    props.creatOrder(order);
  };

  const handelFormChange = (e) => {
    setValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const closeModal = () => {
    props.clearOrder();
    props.setShowForm(false);
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
              <label>{words.cheackoutName}</label>
              <input
                onChange={handelFormChange}
                type="text"
                required
                name="name"
              />
            </div>

            <div>
              <label>{words.cheackoutEmail}</label>
              <input
                onChange={handelFormChange}
                type="email"
                required
                name="email"
              />
            </div>

            <div>
              <button className="cart__btn" type="submit">
                {words.cheackoutBtn}
              </button>
            </div>
          </form>
        </div>
      </Slide>
      <OrderModel order={props.order} closeModal={closeModal} />
    </div>
  );
};

export default connect(
  (state) => {
    return {
      order: state.order.order,
    };
  },
  { creatOrder, clearOrder }
)(CheckoutForm);
