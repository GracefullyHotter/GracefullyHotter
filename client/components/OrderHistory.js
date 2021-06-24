import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchOrders } from "../store";
import SingleOrder from "./SingleOrder";

class OrderHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.props.loadOrders();
    this.setState({ loading: false });
  }

  render() {
    const orders = this.props.orders;

    return (
      <div>
        {orders.map((order) => {
          return <SingleOrder order={order} key={order.id} />;
        })}
      </div>
    );
  }
}

const mapState = (state) => ({
  orders: state.orders,
});

const mapDispatch = (dispatch) => ({
  loadOrders: () => dispatch(fetchOrders()),
});

export default connect(mapState, mapDispatch)(OrderHistory);
