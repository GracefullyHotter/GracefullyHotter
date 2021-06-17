import React from "react";
import { connect } from "react-redux";
import { fetchSauce } from "../store/sauce";
import { Link } from "react-router-dom";
import { deleteSauce } from "../store/sauces";

class EditSauce extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getSauce(id);
    this.setState({ loading: false });
  }

  handleClick(e) {
    e.preventDefault();
    const id = this.props.match.params.id;
    this.props.removeSauce(id);
  }

  render() {
    const { sauce } = this.props;
    const { loading } = this.state;
    const { handleClick } = this;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div style={{ display: "flex" }}>
        <div>
          <h1>{sauce.name}</h1>
          <p>
            <img src={sauce.imageURL} />
          </p>
        </div>
        <div>
          <p>{sauce.description}</p>
          <p>Pepper(s): {sauce.pepper}</p>
          <p>Rating: {sauce.userRating}</p>
          <p>Heat (SHU): {sauce.SHU}</p>
          <h3>Price: ${sauce.price}</h3>
          <Link to="/shop">Back to all sauces</Link>
        </div>
        <button className="button is-medium is-danger" onClick={handleClick}>
          Delete
        </button>
        <Link className="button is-medium is-link" to={`/shop/${sauce.id}`}>
          Back to sauce view
        </Link>
      </div>
    );
  }
}

const mapState = (state) => ({
  sauce: state.sauce,
});

const mapDispatch = (dispatch) => ({
  getSauce: (id) => dispatch(fetchSauce(id)),
  removeSauce: (id) => dispatch(deleteSauce(id)),
});

export default connect(mapState, mapDispatch)(EditSauce);
