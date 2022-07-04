import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchOrder } from "../store/actions/order";
import "./Order.css";

const Order = (props) => {
  useEffect(() => {
    props.fetchOrder();
  }, []);

  const { order } = props;
  return (
    <div className="orders">
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>item</th>
          </tr>
        </thead>
        <tbody>
          {order &&
            order.map((p) => (
              <tr key={p._id}>
                <td>{p._id}</td>
                <td>{p.name}</td>
                <td>{p.email}</td>
                <td>
                  {props.cartItems.map((item) => (
                    <p>
                      {item.title}, qty: {item.qty}
                    </p>
                  ))}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default connect(
  (state) => {
    return {
      order: state.order.orders,
      cartItems: state.cart.cartItems,
    };
  },
  { fetchOrder }
)(Order);
