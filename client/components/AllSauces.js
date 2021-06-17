import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSauces } from "../store/sauces";
import SauceCard from "./SauceCard";

export class AllSauces extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.props.getSauces();
    this.setState({ loading: false });
  }

  render() {
    const { sauces, isAdmin } = this.props;
    const { loading } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <React.Fragment>
        {isAdmin ? (
          <Link to="/sauces/create" className="buttons is-right">
            <button className="button is-warning is-right">
              Add Hot Sauce
            </button>
          </Link>
        ) : (
          <div />
        )}

        {sauces.length > 0 ? (
          <div className="columns is-multiline">
            {sauces.map((sauce) => (
              <SauceCard
                key={sauce.id}
                sauce={sauce}
                history={this.props.history}
              />
            ))}
          </div>
        ) : (
          <h1>No hot sauces in the database</h1>
        )}
      </React.Fragment>
    );
  }
}

const mapState = (state) => {
  return {
    sauces: state.sauces,
    isAdmin: state.auth.isAdmin,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getSauces: () => dispatch(fetchSauces()),
  };
};

export default connect(mapState, mapDispatch)(AllSauces);
