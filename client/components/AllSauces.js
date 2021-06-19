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
    this.filterProducts = this.filterProducts.bind(this);
    this.filterByPepper = this.filterByPepper.bind(this);
  }

  componentDidMount() {
    this.props.getSauces();
    this.setState({ loading: false });
  }

  filterProducts(e) {
    e.preventDefault();
    console.log(e.target.innerHTML);
  }

  filterByPepper(e) {
    e.preventDefault();
    console.log(e.target.innerHTML);
  }

  render() {
    const { sauces, isAdmin } = this.props;
    const { loading } = this.state;
    const { filterProducts, filterByPepper } = this;

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
        <div className="dropdown is-hoverable">
          <div className="dropdown-trigger">
            <button
              style={{ marginLeft: "20px" }}
              className="button is-warning"
              aria-haspopup="true"
              aria-controls="dropdown-menu4"
            >
              <span id="filterspan">Filter</span>
              <span className="icon is-small">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div className="dropdown-menu" id="dropdown-menu4" role="menu">
            <div className="dropdown-content" style={{ cursor: "pointer" }}>
              <div className="dropdown-item" onClick={filterProducts}>
                <p>Spice Low to High</p>
              </div>
              <div className="dropdown-item" onClick={filterProducts}>
                <p>Spice High to Low</p>
              </div>
              <div className="dropdown-item" onClick={filterProducts}>
                <p>Price Low to High</p>
              </div>
              <div className="dropdown-item" onClick={filterProducts}>
                <p>Price High to Low</p>
              </div>
              <div className="dropdown-item" onClick={filterProducts}>
                <p>Featured</p>
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown is-hoverable">
          <div className="dropdown-trigger">
            <button
              style={{ marginLeft: "20px" }}
              className="button is-danger"
              aria-haspopup="true"
              aria-controls="dropdown-menu4"
            >
              <span id="filterspan">Pepper</span>
              <span className="icon is-small">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div className="dropdown-menu" id="dropdown-menu4" role="menu">
            <div className="dropdown-content" style={{ cursor: "pointer" }}>
              <div className="dropdown-item" onClick={filterByPepper}>
                <p>Habanero</p>
              </div>
              <div className="dropdown-item" onClick={filterByPepper}>
                <p>Cayenne</p>
              </div>
              <div className="dropdown-item" onClick={filterByPepper}>
                <p>Pepper</p>
              </div>
              <div className="dropdown-item" onClick={filterByPepper}>
                <p>Jalapeno</p>
              </div>
            </div>
          </div>
        </div>

        {sauces.length > 0 ? (
          <div
            className="columns is-multiline is-centered"
            style={{ margin: "20px" }}
          >
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
