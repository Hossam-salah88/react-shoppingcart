import React from "react";
import Modal from "react-modal";
import { connect } from "react-redux";

const OrderModel = (props) => {
  return (
    <>
      <Modal isOpen={props.order} onRequestClose={props.closeModal}>
        <div className="order">
          <span className="order__closeBtn" onClick={props.closeModal}>
            &times;
          </span>
          <p className="order__success">Order done sucsess</p>
          <table>
            <tr>
              <td>Name:</td>
              <td>{props.order.name}</td>
            </tr>

            <tr>
              <td>Email:</td>
              <td>{props.order.email}</td>
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
    </>
  );
};

export default connect((state) => {
  return {
    cartItems: state.cart.cartItems,
  };
})(OrderModel);
