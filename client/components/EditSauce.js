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
      <div style={{ display: "flex", margin: "20px" }}>
        <div style={{ margin: "10px" }}>
          <h1 className="title">{sauce.name}</h1>
          <p>
            <img src={sauce.imageURL} />
          </p>
        </div>
        <div style={{ margin: "20px" }}>
          <p className="title is-4 has-text-danger">{sauce.description}</p>
          <p className="title is-4">Pepper(s): {sauce.pepper}</p>
          <p className="title is-4 ">Rating: {sauce.userRating}</p>
          <p className="title is-4 ">Heat (SHU): {sauce.SHU}</p>
          <p className="title is-4 ">Price: ${sauce.price}</p>
          <Link className="button is-medium is-warning" to="/shop">
            Back to all sauces
          </Link>
          <button
            style={{ margin: "0 10px" }}
            className="button is-medium is-danger"
            onClick={handleDelete}
          >
            Delete
          </button>
          <Link className="button is-medium is-link" to={`/shop/${sauce.id}`}>
            Back to sauce view
          </Link>

          <form onSubmit={handleUpdate}>
            <div className="field">
              <label className="label" htmlFor="name">
                Sauce Name:
              </label>
              <input
                className="input is-danger is-small"
                name="name"
                onChange={handleChange}
                value={name}
              />
            </div>

            <div className="field">
              <label className="label" htmlFor="imageURL">
                Image Url:
              </label>
              <input
                className="input is-danger is-small"
                name="imageURL"
                onChange={handleChange}
                value={imageURL}
              />
            </div>

            <div className="field">
              <label className="label" htmlFor="pepper">
                Pepper:
              </label>
              <input
                className="input is-danger is-small"
                name="pepper"
                onChange={handleChange}
                value={pepper}
              />
            </div>

            <br />

            <div className="field">
              <label className="label" htmlFor="userRating">
                User Rating:
              </label>
              <input
                className="input is-danger is-small"
                name="userRating"
                onChange={handleChange}
                value={userRating}
              />
            </div>

            <div className="field">
              <label className="label" htmlFor="price">
                Price:
              </label>
              <input
                className="input is-danger is-small"
                name="price"
                onChange={handleChange}
                value={price}
              />
            </div>

            <div className="field">
              <label className="label" htmlFor="SHU">
                SHU:
              </label>
              <input
                className="input is-danger is-small"
                name="SHU"
                onChange={handleChange}
                value={SHU}
              />
            </div>

            <br />

            <div className="field">
              <label className="label" htmlFor="description">
                Description:
              </label>
              <input
                className="input is-danger is-small"
                name="description"
                onChange={handleChange}
                value={description}
              />
            </div>

            <br />

            <button
              style={{ marginTop: "10px" }}
              className="button is-primary is-medium"
              type="submit"
            >
              Update Sauce
            </button>
          </form>
        </div>
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
