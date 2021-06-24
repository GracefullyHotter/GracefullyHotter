import React from "react";
import { connect } from "react-redux";
import { putUser } from "../store/users";
import { fetchSingleUser } from "../store/user";

class EditUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      name: "",
      email: "",
      isAdmin: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAdmin = this.handleAdmin.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.loadUser(+this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.user !== this.props.user) {
      this.setState({
        id: this.props.user.id,
        name: this.props.user.name,
        email: this.props.user.email,
        isAdmin: this.props.user.isAdmin,
      });
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleAdmin(event) {
    let value = event.target.value;
    if (value === "true") this.setState({ isAdmin: true });
    else this.setState({ isAdmin: false });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.updateUser({ ...this.state });
  }

  render() {
    const { name, email, isAdmin } = this.state;
    console.log(name);
    return (
      <React.Fragment>
        <h1 className="title ml-6">EDIT USER FORM</h1>

        <form
          className="column ml-6"
          name="edit-user"
          onSubmit={this.handleSubmit}
        >
          <div className="field">
            <label htmlFor="name" className="label">
              Name *
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
          </div>

          <div className="field">
            <label htmlFor="email" className="label">
              Email *
            </label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label className="label mt-10">Admin?</label>
            <div className="field is-narrow">
              <div className="control">
                <label className="radio">
                  <input
                    type="radio"
                    name="isAdmin"
                    value={true}
                    checked={isAdmin ? "checked" : null}
                    onChange={this.handleAdmin}
                  />
                  Yes
                </label>
                <label className="radio">
                  <input
                    type="radio"
                    name="isAdmin"
                    value={false}
                    checked={isAdmin ? null : "checked"}
                    onChange={this.handleAdmin}
                  />
                  No
                </label>
              </div>
            </div>
          </div>

          <button className="button is-medium is-success" type="submit">
            Update User
          </button>
        </form>
      </React.Fragment>
    );
  }
}

const mapState = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadUser: (id) => dispatch(fetchSingleUser(id)),
    updateUser: (user) => dispatch(putUser(user)),
  };
};

export default connect(mapState, mapDispatch)(EditUser);
