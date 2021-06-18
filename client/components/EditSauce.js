import React from "react";
import { connect } from "react-redux";
import { fetchSauce } from "../store/sauce";
import { Link } from "react-router-dom";
import { deleteSauce, putSauce } from "../store/sauces";

class EditSauce extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const id = +this.props.match.params.id;
    this.props.getSauce(id);
    this.setState(this.props.sauce);
  }

  handleDelete(e) {
    e.preventDefault();
    const id = +this.props.match.params.id;
    this.props.removeSauce(id);
  }

  handleUpdate(event) {
    event.preventDefault();
    this.props.updateSauce(this.state);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { sauce } = this.props;
    const { handleDelete, handleChange, handleUpdate } = this;
    const { name, imageURL, pepper, description, userRating, price, SHU } =
      this.state;

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
        <button className="button is-medium is-danger" onClick={handleDelete}>
          Delete
        </button>
        <Link className="button is-medium is-link" to={`/shop/${sauce.id}`}>
          Back to sauce view
        </Link>

        <form onSubmit={handleUpdate}>
          <label htmlFor="name">Sauce Name:</label>
          <input name="name" onChange={handleChange} value={name} />

          <br />

          <label htmlFor="imageURL">Image Url:</label>
          <input name="imageURL" onChange={handleChange} value={imageURL} />

          <br />

          <label htmlFor="pepper">Pepper:</label>
          <input name="pepper" onChange={handleChange} value={pepper} />

          <br />

          <label htmlFor="description">Description:</label>
          <input
            name="description"
            onChange={handleChange}
            value={description}
          />

          <br />

          <label htmlFor="userRating">User Rating:</label>
          <input name="userRating" onChange={handleChange} value={userRating} />

          <br />

          <label htmlFor="price">Price:</label>
          <input name="price" onChange={handleChange} value={price} />

          <br />

          <label htmlFor="SHU">SHU:</label>
          <input name="SHU" onChange={handleChange} value={SHU} />

          <button type="submit">Update Sauce</button>
        </form>
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
  updateSauce: (obj) => dispatch(putSauce(obj)),
});

export default connect(mapState, mapDispatch)(EditSauce);
