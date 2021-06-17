import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { Login, Signup } from "./components/AuthForm";
import LandingPage from "./components/LandingPage";
import AllSauces from "./components/AllSauces";
import Cart from "./components/Cart";
import SingleSauce from "./components/SingleSauce";
import { me } from "./store";
import EditSauce from "./components/EditSauce";
import CreateSauce from "./components/CreateSauce";
import Profile from "./components/Profile";
import AllUsers from "./components/AllUsers";

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/users" component={AllUsers} />
          <Route exact path="/shop" component={AllSauces} />
          <Route exact path="/sauces/create" component={CreateSauce} />
          <Route path="/cart" component={Cart} />
          <Route path="/shop/:id" component={SingleSauce} />
          <Route path="/editsauce/:id" component={EditSauce} />
        </Switch>
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
