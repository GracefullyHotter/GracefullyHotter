import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { checkIfProfileDataAlreadyExists } from "../store/auth";

class EditProfileInfo extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState(this.props.profileInfo);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async handleUpdate(event) {
    event.preventDefault();
    const response = await this.props.updateProfile(this.state);
    let alertMessage = null;
    if (response.nameTaken) {
      alertMessage = "Username is already in use!";
    } else if (response.emailTaken) {
      alertMessage = "Email is already in use!";
    } else {
      alertMessage = "Successfully changed profile info!";
    }
    alert(alertMessage);
  }

  render() {
    const { handleChange, handleUpdate } = this;
    const { name, email } = this.state;
    return (
      <div>
        <form onSubmit={handleUpdate}>
          <div className="field">
            <label className="label" htmlFor="name">
              Name:
            </label>
            <input
              className="input is-danger is-small"
              name="name"
              required
              onChange={handleChange}
              value={name}
            />
          </div>

          <br />

          <div className="field">
            <label className="label" htmlFor="email">
              Email:
            </label>
            <input
              className="input is-danger is-small"
              name="email"
              required
              onChange={handleChange}
              value={email}
            />
          </div>

          <br />

          <button
            style={{ marginTop: "10px" }}
            className="button is-primary is-medium"
            type="submit"
          >
            Update Profile Info
          </button>

          <br />

          <Link
            style={{ marginTop: "10px" }}
            className="button is-warning is-medium"
            to="/profile"
          >
            Go Back
          </Link>
        </form>
      </div>
    );
  }
}

const mapState = (state) => ({
  profileInfo: state.auth,
});

//add update profile thunk creator in user.js
const mapDispatch = (dispatch) => ({
  updateProfile: (obj) => dispatch(checkIfProfileDataAlreadyExists(obj)),
});

export default connect(mapState, mapDispatch)(EditProfileInfo);
