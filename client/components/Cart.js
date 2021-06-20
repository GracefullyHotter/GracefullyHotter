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

  // onClick(type) {
  //   this.setState((prevState) => {
  //     return {
  //       quantity:
  //         type == "add" ? prevState.quantity + 1 : prevState.quantity - 1,
  //     };
  //   });
  // }

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

    window.localStorage.setItem("cart", JSON.stringify(this.state.cart));

    if (increment || !increment) {
      this.props.addToCart({
        id: sauce.id,
        price: sauce.price,
        quantity: updatedQuantity,
      });
    }
  }

  render() {
    const { cart, sauces } = this.state;

    console.log("state cart", cart);

    const btns = [
      { id: "plus", content: "+" },
      { id: "minus", content: "-" },
    ];

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

                  <br />

                  <span>
                    ${((sauce.price / 100) * cart[idx].quantity).toFixed(2)}
                  </span>
                </p>
              </div>
            </div>
          </article>
        ))}

        {/*sauces.map((sauce) => (
          <div key={sauce.id} className="cart-item">
            <div>
              <div>
                <span>{sauce.name}</span>
              </div>
              <div>
                <img src={sauce.imageURL} />
              </div>

              <div>
                <button
                  type="button"
                  onClick={this.onClick.bind(this, "sub")}
                  name="button"
                >
                  <span> - </span>
                </button>
                <span> {this.state.quantity} </span>
                <button
                  type="button"
                  onClick={this.onClick.bind(this, "add")}
                  name="button"
                >
                  <span> + </span>
                </button>
                <div>
                  <span style={{ textAlign: "center" }}>
                    ${((sauce.price / 100) * this.state.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))*/}

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
