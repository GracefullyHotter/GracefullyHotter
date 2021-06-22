import React, { Component, Fragment } from "react"
import { connect } from "react-redux"
import { withRouter, Route, Switch, Redirect } from "react-router-dom"
import { Login, Signup } from "./components/AuthForm"
import LandingPage from "./components/LandingPage"
import AllSauces from "./components/AllSauces"
import Cart from "./components/Cart"
import Confirmation from "./components/Confirmation"
import Checkout from "./components/Checkout"
import SingleSauce from "./components/SingleSauce"
import { me } from "./store"
import EditSauce from "./components/EditSauce"
import CreateSauce from "./components/CreateSauce"

import Profile from "./components/Profile"
import AllUsers from "./components/AllUsers"
import EditUser from "./components/EditUser"

import OrderHistory from "./components/OrderHistory";
import SingleOrder from "./components/SingleOrder";

/**
 * COMPONENT
 */
class Routes extends Component {
	componentDidMount() {
		this.props.loadInitialData()
		// localStorage.setItem("cart", JSON.stringify([]));
	}

	render() {
		const { isAdmin } = this.props

    return (
      <div>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/orders" component={OrderHistory} />
          <Route path="/orders/:id" component={SingleOrder} />
          <Route exact path="/shop" component={AllSauces} />
          <Route path="/cart" component={Cart} />
          <Route path ="/confirmation" component={Confirmation} />
          <Route path="/stripecomp" component={Checkout} />
          <Route path="/shop/:id" component={SingleSauce} />
          {isAdmin ? (
            <>
              <Route exact path="/users" component={AllUsers} />
              <Route exact path="/users/:id/edit" component={EditUser} />
              <Route path="/editsauce/:id" component={EditSauce} />
              <Route exact path="/sauces/create" component={CreateSauce} />
            </>
          ) : (
            <>
              <Route path="/editsauce/:id" component={LandingPage} />
              <Route exact path="/sauces/create" component={LandingPage} />
            </>
          )}
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
		isAdmin: state.auth.isAdmin,
	}
}

const mapDispatch = (dispatch) => {
	return {
		loadInitialData() {
			dispatch(me())
		},
	}
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))
