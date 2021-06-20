import React from "react";
import { connect } from "react-redux";
import { fetchSauce } from "../store/sauce";
import { Link } from "react-router-dom";
import { checkoutCart, updateCart } from "../store/cart";

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: JSON.parse(localStorage.getItem("cart")),
      sauces: [],
    };
    this.handleCheckout = this.handleCheckout.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const cart = this.state.cart;
    cart.forEach((cartItem) => {
      this.props.getSauce(cartItem.id);
    });
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.sauce !== this.props.sauce) {
      await this.setState({ sauces: [...this.state.sauces, this.props.sauce] });
    }
  }

  async handleChange(e, sauce) {
    const increment = e.target.id === "plus";
    let updatedQuantity = 0;

    const updatedCart = this.state.cart.map((item) => {
      if (item.id === sauce.id) {
        increment ? ++item.quantity : --item.quantity;
        updatedQuantity = item.quantity;
      }
      return item;
    });

    window.localStorage.setItem("cart", JSON.stringify(updatedCart));
    await this.setState({ cart: updatedCart });

    this.props.updateCart({
      id: sauce.id,
      price: sauce.price,
      quantity: updatedQuantity,
    });
  }

  handleCheckout() {
    this.props.checkout();
  }

  render() {
    const { cart, sauces } = this.state;

    const btns = [
      { id: "plus", content: "+" },
      { id: "minus", content: "-" },
    ];

    // if (cart.length === 0) {
    //   return <h1>no items in your cart!</h1>;
    // }
    console.log("state cart", cart);

    return (
      <React.Fragment>
        <h1 className="cart-title">Cart</h1>

        {sauces.map((sauce, idx) => (
          <article key={sauce.id} className="media">
            <figure className="media-left">
              <p className="image is-64x64">
                <img src={sauce.imageURL} />
              </p>
            </figure>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{sauce.name}</strong>
                  <br />
                  <small>
                    Quantity:
                    {cart[idx].id === sauce.id ? cart[idx].quantity : 0}
                  </small>
                  <br />

                  {btns.map((btn, btnIdx) => (
                    <button
                      type="button"
                      key={btnIdx}
                      id={btn.id}
                      onClick={(e) => this.handleChange(e, sauce)}
                    >
                      {btn.content}
                    </button>
                  ))}
                  <button type="button" id="delete">
                    Remove
                  </button>

                  <br />

                  <span>
                    ${((sauce.price / 100) * cart[idx].quantity).toFixed(2)}
                  </span>
                </p>
              </div>
            </div>
          </article>
        ))}

        <Link to={"/confirmation"}>
          <button
            className="button is-large is-danger"
            onClick={this.handleCheckout}
          >
            Checkout
          </button>
        </Link>
      </React.Fragment>
    );
  }
}

const mapState = (state) => ({
  sauce: state.sauce,
});

const mapDispatch = (dispatch) => ({
  getSauce: (id) => dispatch(fetchSauce(id)),
  updateCart: (item) => dispatch(updateCart(item)),
  checkout: () => dispatch(checkoutCart()),
});

export default connect(mapState, mapDispatch)(Cart);
