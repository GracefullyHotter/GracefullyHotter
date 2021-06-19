import React from "react";
import { connect } from "react-redux";
import { authenticate, fetchCart } from "../store";

/**
 * COMPONENT
 */
const AuthForm = (props) => {
  const { name, displayName, handleSubmit, error } = props;

  return (
    <div className="columns">
      <div className="column"></div>
      <div className="column">
        <form onSubmit={handleSubmit} name={name} className="">
          <div className="field">
            <label className="label is-large" htmlFor="email">
              <small>Email</small>
            </label>
            <div className="control has-icons-left">
              <input
                className="input is-danger is-medium"
                type="text"
                placeholder="random@gmail.com"
                name="email"
                required
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
          </div>
          <br />
          <div className="field">
            <label className="label is-large" htmlFor="password">
              <small>Password</small>
            </label>
            <div className="control has-icons-left">
              <input
                className="input is-danger is-medium"
                type="text"
                placeholder="*******"
                name="password"
                type="password" // 2 types here?
                required
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </div>
          </div>
          <br />
          <div>
            <button className="button is-large is-danger" type="submit">
              {displayName}
            </button>
          </div>
          {error && error.response && <div> {error.response.data} </div>}
        </form>
      </div>
      <div className="column"></div>
    </div>
  );
};

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = (state) => {
  return {
    name: "login",
    displayName: "Login",
    error: state.auth.error,
  };
};

const mapSignup = (state) => {
  return {
    name: "signup",
    displayName: "Sign Up",
    error: state.auth.error,
  };
};

const mapDispatch = (dispatch) => {
  return {
    async handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      await dispatch(authenticate(email, password, formName));
      await dispatch(fetchCart());
    },
  };
};

export const Login = connect(mapLogin, mapDispatch)(AuthForm);
export const Signup = connect(mapSignup, mapDispatch)(AuthForm);
