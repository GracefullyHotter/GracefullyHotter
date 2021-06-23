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
          <h2>Name: {user.name}</h2>
          <h2>Email: {user.email}</h2>

          <br></br>

          <div className="user-profile level">
            <div className="level-right">
              <div className="level-item">
                <Link
                  className="button is-medium is-link"
                  to={`/users/profiles/edit/${user.id}`}
                >
                  Edit My Profile
                </Link>
              </div>

              <div className="level-item">
                <Link className="button is-medium is-danger" to="/orders">
                  Order History
                </Link>
              </div>
            </div>
          </div>
        </div>

        <br></br>
        <br></br>

        {isAdmin ? (
          <div id="admin-dashboard">
            <h1 className="title is-3 is-centered">ADMINS</h1>

            <div className="level-left">
              <div className="level-item">
                <Link className="button is-medium is-link" to="/users">
                  Users
                </Link>
              </div>

              <br></br>
              <div className="level-item">
                <Link className="button is-medium is-danger" to="/shop">
                  Hot Sauces
                </Link>
              </div>
            </div>
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
