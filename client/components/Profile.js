import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isAdmin, user } = this.props;

    return (
      <React.Fragment>
        <div id="user-info">
          <h1 className="title is-3 is-centered">ACCOUNT INFORMATION</h1>
          <h2>{user.name}</h2>
          <h2>{user.email}</h2>
          <Link
            className="button is-medium is-link"
            to={`/users/profiles/edit/${user.id}`}
          >
            Edit My Profile
          </Link>
        </div>


        <Link className="button is-medium is-danger" to="/orders">Order History</Link>

        <br></br>
        <br></br>

        {isAdmin ? (
          <div id="admin-dashboard">
            <h1>ADMINS</h1>
            <Link to="/users">Users</Link>
            <br></br>
            <Link to="/shop">Hot Sauces</Link>
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}

const mapState = (state) => ({
  isAdmin: state.auth.isAdmin,
  user: state.auth,
});

export default connect(mapState, null)(Profile);
