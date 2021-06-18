import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";

const Navbar = ({ handleClick, isLoggedIn }) => (
  <React.Fragment>
    <div className="columns ">
      <div className="column is-half is-4">
        <h1 className="column title font-test is-size-1">Gracefully Hotter</h1>
      </div>

      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div id="navbarBasicExample" className="navbar-menu">
          {isLoggedIn ? (
            <div className="navbar-end">
              <Link to="/" className="navbar-item">
                Home
              </Link>
              <Link to="/shop" className="navbar-item">
                Shop
              </Link>
              <Link to="/profile" className="navbar-item">
                Profile
              </Link>
              <a to="#" className="navbar-item" onClick={handleClick}>
                Logout
              </a>
              <Link to="/cart" className="navbar-item">
                Cart
              </Link>
            </div>
          ) : (
            <div className="navbar-start">
              <Link to="/" className="navbar-item">
                Home
              </Link>
              <Link to="/shop" className="navbar-item">
                Shop
              </Link>
              <Link to="/login" className="navbar-item">
                Login
              </Link>
              <Link to="/signup" className="navbar-item">
                Sign Up
              </Link>
              <Link to="/cart" className="navbar-item">
                Cart
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  </React.Fragment>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
