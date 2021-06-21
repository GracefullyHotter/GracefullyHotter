import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  //should conditionally render for admin links if isAdmin from state is true

  render() {
    const { isAdmin } = this.props;
    return (
      <React.Fragment>
        <div id="user-info">
          <p>my user info is here!</p>
          <Link to={`/users/profiles/edit/${this.props.userId}`}>
            Edit My Profile
          </Link>
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
  userId: state.auth.id,
});

export default connect(mapState)(Profile);
