import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  //should conditionally render for admin links if isAdmin from state is true

  return (
    <React.Fragment>
      <div id="user-info">
        <p>my user info is here!</p>
        <p>eventually i'll be able to edit but not now!</p>
      </div>

      <a>View Order History</a>

      <br></br>
      <br></br>

      <div id="admin-dashboard">
        <h1>ADMINS</h1>
        <Link to="/users">Users</Link>
        <br></br>
        <Link to="/shop">Hot Sauces</Link>
      </div>
    </React.Fragment>
  );
};

export default Profile;
