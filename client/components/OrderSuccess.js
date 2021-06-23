import React from "react";
import { connect } from "react-redux";
import { checkoutCart } from "../store/cart";

class OrderSuccess extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.checkout();
  }

  render() {
    return <div>Congratulations! Your order has been successfully processed!</div>
  }
}

const mapDispatch = (dispatch) => ({
  checkout: () => dispatch(checkoutCart()),
});

export default connect(null, mapDispatch)(OrderSuccess);
