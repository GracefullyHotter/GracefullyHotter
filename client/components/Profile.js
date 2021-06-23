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
          <h1>{user.name}</h1>
          <h1>{user.email}</h1>
          <Link to={`/users/profiles/edit/${user.id}`}>Edit My Profile</Link>
        </div>

        <a>View Order History</a>

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
