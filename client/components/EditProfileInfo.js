import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSingleUser } from "../store/user";
import { putUser } from "../store/users";

class EditProfileInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
    };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.loadUser(+this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.user !== this.props.user) {
      this.setState({
        name: this.props.user.name,
        email: this.props.user.email,
      });
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleUpdate(event) {
    event.preventDefault();
  }

  render() {
    console.log("this.state", this.state);
    console.log("this.props", this.props);
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
  user: state.user,
});

//add update profile thunk creator in user.js
const mapDispatch = (dispatch) => ({
  loadUser: (id) => dispatch(fetchSingleUser(id)),
  updateUser: (user) => dispatch(putUser(user)),
});

export default connect(mapState, mapDispatch)(EditProfileInfo);
