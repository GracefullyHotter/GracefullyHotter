import React from "react";
// import { connect } from "react-redux"

const cart = {
  id: 3,
  sauces: [
    {
      id: 1,
      name: "HotSauce1",
      imageUrl:
        "https://hotsaucefever.com/images/sauces/654/el-yucateco-black-label-chile-habanero.jpg",
      price: 450,
      quantity: 4,
    },
    {
      id: 2,
      name: "HotSauce2",
      imageUrl:
        "https://hotsaucefever.com/images/sauces/654/el-yucateco-black-label-chile-habanero.jpg",
      price: 400,
      quantity: 4,
    },
    {
      id: 3,
      name: "HotSauce3",
      imageUrl:
        "https://hotsaucefever.com/images/sauces/654/el-yucateco-black-label-chile-habanero.jpg",
      price: 560,
      quantity: 4,
    },
  ],
};

class Cart extends React.Component {
  constructor() {
    super();
    this.state = { quantity: 1 };
    this.onClick = this.onClick.bind(this);
  }

  // componentDidMount() {
  // 	this.props.fetchCart()
  // 	this.setState({ loading: false })
  // }

  // handleChange(event) {
  // 	event.preventDefault()
  // 	this.setState({
  // 		[event.target.name]: event.target.value,
  // 	})
  // }

  onClick(type) {
    this.setState((prevState) => {
      return {
        quantity:
          type == "add" ? prevState.quantity + 1 : prevState.quantity - 1,
      };
    });
  }

  render() {
    const sauces = cart.sauces;
    return (
      <>
        <h1
          style={{
            textAlign: "center",
            margin: "auto",
            marginBottom: "40px",
            fontSize: "50px",
          }}
        >
          Cart
        </h1>
        {sauces.map((sauce) => (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "20px",
              paddingBottom: "20px",
              marginBottom: "20px",
              marginLeft: "auto",
              marginRight: "auto",
              padding: "20 50 20 50",
              width: "500px",
              border: "1px solid black",
              borderRadius: "15px",
            }}
          >
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
      </>
    );
  }
}

// const mapState = (state) => {
// 	return {
// 		cart: state.cart,
// 	}
// }

// const mapDispatch = (dispatch) => {
// 	return {
// 		fetchCart: () => dispatch(fetchCart()),
// 		addToCart: () => dispatch(addToCart()),
// 		decreaseQuantity: () => dispatch(decreaseQuantity()),
// 	}
// }

// export default connect(mapState, mapDispatch)(Cart)
export default Cart;
