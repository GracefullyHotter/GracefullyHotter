import React from "react";

const UserCard = ({ user }) => {
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
            <a className="level-item">
              <span className="icon is-small">
                <i className="far fa-edit"></i>
              </span>
            </a>
            <a className="level-item">
              <span className="icon is-small">
                <i className="far fa-trash-alt"></i>
              </span>
            </a>
          </div>
        </nav>
      </div>
    </article>
  );
};

export default UserCard;
