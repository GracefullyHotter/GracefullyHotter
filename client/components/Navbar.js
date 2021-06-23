import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout, loginCart } from "../store";

class Navbar extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { handleClick, isLoggedIn, cart } = this.props;
    return (
      <React.Fragment>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div id="navbarBasicExample" className="navbar-menu">
            {isLoggedIn ? (
              <React.Fragment>
                <div className="navbar-start">
                  <Link to="/" className="navbar-item">
                    Home
                  </Link>
                  <Link to="/shop" className="navbar-item">
                    Shop
                  </Link>
                </div>

                <div className="column is-half is-centered is-6">
                  <h1 className="column title font-test is-size-1 has-text-centered">
                    Gracefully Hotter
                  </h1>
                </div>

                <div className="navbar-end">
                  <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link">User</a>
                    <div className="navbar-dropdown">
                      <Link to="/profile" className="navbar-item">
                        Profile
                      </Link>
                      <a to="#" className="navbar-item" onClick={handleClick}>
                        Logout
                      </a>
                    </div>
                  </div>
                  <Link to="/cart" className="navbar-item">
                    <span
                      className="fa-stack fa-2x has-badge"
                      data-count={cart.length}
                    >
                      <i className="fa fa-circle fa-stack-1x fa-inverse"></i>
                      <i className="fa fa-shopping-cart fa-stack-1x red-cart"></i>
                    </span>
                  </Link>
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <div className="navbar-start">
                  <Link to="/" className="navbar-item">
                    Home
                  </Link>
                  <Link to="/shop" className="navbar-item">
                    Shop
                  </Link>
                </div>

                <div className="column is-half is-centered is-6">
                  <h1 className="column title font-test is-size-1 has-text-centered">
                    Gracefully Hotter
                  </h1>
                </div>

                <div className="navbar-end">
                  <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link">User</a>
                    <div className="navbar-dropdown">
                      <Link to="/login" className="navbar-item">
                        Login
                      </Link>
                      <Link to="/signup" className="navbar-item">
                        Sign Up
                      </Link>
                    </div>
                  </div>
                  <Link to="/cart" className="navbar-item">
                    Cart
                  </Link>
                </div>
              </React.Fragment>
            )}
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
    cart: state.cart,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick: () => dispatch(logout()),
    fetchCart: () => dispatch(loginCart()),
  };
};

export default connect(mapState, mapDispatch)(Navbar);
