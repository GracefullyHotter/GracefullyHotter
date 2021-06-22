import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const SingleOrder = (props) => {
  const order = props.order;
  return (
    <div style={{ margin: "20px" }}>
      <div>Order completed at {order.updatedAt}</div>
      <ul>
        {order.sauces.map((sauce) => {
          return <li key={sauce.id}>{sauce.cartItem.quantity} — {sauce.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default SingleOrder;
