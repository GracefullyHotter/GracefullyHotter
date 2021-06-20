import React from "react";
import { connect } from "react-redux";
import { fetchSauce } from "../store/sauce";
import { addToCart } from "../store/cart";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: JSON.parse(localStorage.getItem("cart")),
      sauces: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const cart = this.state.cart;
    cart.forEach((cartItem) => {
      this.props.getSauce(cartItem.id);
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.sauce !== this.props.sauce) {
      this.setState({ sauces: [...this.state.sauces, this.props.sauce] });
    }
  }

  async handleChange(e, sauce) {
    const increment = e.target.id === "plus";
    let updatedQuantity = 0;

    await this.setState({
      cart: this.state.cart.map((item) => {
        if (item.id === sauce.id) {
          increment ? ++item.quantity : --item.quantity;
          updatedQuantity = item.quantity;
        }
        return item;
      }),
    });

    //how to remove cart item in localstorage...
    // if (updatedQuantity === 0) {
    //   await this.setState({
    //     cart: this.state.cart.filter((item) => item.id !== sauce.id),
    //   });
    // }

    window.localStorage.setItem("cart", JSON.stringify(this.state.cart));

    this.props.addToCart({
      id: sauce.id,
      price: sauce.price,
      quantity: updatedQuantity,
    });
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
                  <small>Quantity:{cart[idx].quantity}</small>
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

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "​100vh",
          }}
        >
          <button style={{ margin: "20px" }}>CHECKOUT</button>
        </div>
      </React.Fragment>
    );
  }
}

const mapState = (state) => ({
  sauce: state.sauce,
});

const mapDispatch = (dispatch) => ({
  getSauce: (id) => dispatch(fetchSauce(id)),
  addToCart: (item) => dispatch(addToCart(item)),
});

export default connect(mapState, mapDispatch)(Cart);
