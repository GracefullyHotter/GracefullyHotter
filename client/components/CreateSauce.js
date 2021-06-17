import React from "react";
import { connect } from "react-redux";
import { createNewSauce } from "../store/sauces";

class CreateSauce extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      pepper: "",
      description: "",
      userRating: 0,
      SHU: 0,
      price: 0,
      imageURL: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createSauce({ ...this.state });
  }

  render() {
    const {
      name,
      pepper,
      description,
      userRating,
      SHU,
      price,
      imageURL,
    } = this.state;

    return (
      <React.Fragment>
        <h1>NEW SAUCE FORM</h1>

        <form name="create-sauce" onSubmit={this.handleSubmit}>
          <div className="field">
            <label htmlFor="name" className="label">
              Hot Sauce Name *
            </label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                onChange={this.handleChange}
              />
            </div>

            <label htmlFor="pepper" className="label">
              Pepper *
            </label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Pepper"
                name="pepper"
                value={pepper}
                onChange={this.handleChange}
              />
            </div>
            <label htmlFor="description" className="label">
              Description *
            </label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="description"
                name="description"
                value={description}
                onChange={this.handleChange}
              />
            </div>
            <label htmlFor="user-rating" className="label">
              User Rating *
            </label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="user-rating"
                name="userRating"
                value={userRating}
                onChange={this.handleChange}
              />
            </div>
            <label htmlFor="SHU" className="label">
              SHU
            </label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="SHU"
                name="SHU"
                value={SHU}
                onChange={this.handleChange}
              />
            </div>
            <label htmlFor="price" className="label">
              Price *
            </label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="price"
                name="price"
                value={price}
                onChange={this.handleChange}
              />
            </div>
            <label htmlFor="image" className="label">
              Image
            </label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="image"
                name="imageURL"
                value={imageURL}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <button className="button" type="submit">
            Button
          </button>
        </form>
      </React.Fragment>
    );
  }
}

const mapDispatch = (dispatch) => ({
  createSauce: (sauce) => dispatch(createNewSauce(sauce)),
});

export default connect(null, mapDispatch)(CreateSauce);
