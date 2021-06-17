import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../store/users";

class EditUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      isAdmin: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    console.log(this.state);
    const { name, email, isAdmin } = this.state;
    return (
      <React.Fragment>
        <h1>EDIT USER FORM</h1>

        <form name="edit-user">
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

          <div className="field is-horizontal">
            <div className="field-label">
              <label className="label">Admin?</label>
            </div>
            <div className="field-body">
              <div className="field is-narrow">
                <div className="control">
                  <label className="radio">
                    <input type="radio" name="isAdmin" value={true} />
                    Yes
                  </label>
                  <label className="radio">
                    <input type="radio" name="isAdmin" value={false} />
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    getUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(null, mapDispatch)(EditUser);
