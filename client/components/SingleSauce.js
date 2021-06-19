import React from "react";
import { connect } from "react-redux";
import { fetchSauce } from "../store/sauce";
import { addToCart } from "../store/cart";
import { Link } from "react-router-dom";

class SingleSauce extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };

    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  componentDidMount() {
    const id = +this.props.match.params.id;
    this.props.getSauce(id);
    this.setState({ loading: false });
  }

  handleAddToCart() {
    this.props.addToCart({
      id: this.props.sauce.id,
      price: this.props.sauce.price,
      quantity: 1,
    });
  }

  render() {
    const {
      name,
      imageURL,
      description,
      pepper,
      userRating,
      SHU,
      price,
      id,
    } = this.props.sauce;
    const { isAdmin } = this.props;

    const { loading } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div style={{ display: "flex" }}>
        <div>
          <h1>{name}</h1>
          <p>
            <img src={imageURL} />
          </p>
        </div>
        <div>
          <p>{description}</p>
          <p>Pepper(s): {pepper}</p>
          <p>Rating: {userRating}</p>
          <p>Heat (SHU): {SHU}</p>
          <h3>Price: ${(price / 100).toFixed(2)}</h3>
          <Link to="/shop">Back to all sauces</Link>

          <button
            className="button is-medium is-danger"
            onClick={this.handleAddToCart}
          >
            ADD TO CART
          </button>
        </div>
        {isAdmin ? (
          <Link className="button is-medium is-link" to={`/editsauce/${id}`}>
            Edit Sauce
          </Link>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

const mapState = (state) => ({
  sauce: state.sauce,
  isAdmin: state.auth.isAdmin,
});

const mapDispatch = (dispatch) => ({
  getSauce: (id) => dispatch(fetchSauce(id)),
  addToCart: (item) => dispatch(addToCart(item)),
});

export default connect(mapState, mapDispatch)(SingleSauce);
