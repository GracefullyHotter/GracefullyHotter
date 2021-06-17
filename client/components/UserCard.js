import React from "react";
import { connect } from "react-redux";
import { deleteUser, putUser } from "../store/users";
import { Link } from "react-router-dom";

class UserCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user, removeUser } = this.props;
    return (
      <article className="media">
        <div className="media-content">
          <div className="content">
            <p>
              <strong>Name: {user.name}</strong>
              <br></br>
              <strong>Email: {user.email}</strong>
              <br></br>
              <strong>Admin: {String(user.isAdmin)}</strong>
              <br></br>
            </p>
          </div>
          <nav className="level">
            <div className="level-right">
              <Link to={`/users/${user.id}/edit`} className="level-item">
                <span className="icon is-small">
                  <i className="far fa-edit"></i>
                </span>
              </Link>
              <a className="level-item" onClick={() => removeUser(user.id)}>
                <span className="icon is-small">
                  <i className="far fa-trash-alt"></i>
                </span>
              </a>
            </div>
          </nav>
        </div>
      </article>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    removeUser: (id) => dispatch(deleteUser(id)),
    updateUser: (user) => dispatch(putUser(user)),
  };
};

export default connect(null, mapDispatch)(UserCard);
