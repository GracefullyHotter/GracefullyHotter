import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchSauces,
  filterBySpecificPepper,
  filterByUserSearchString,
  filterSauces,
} from "../store/sauces";
import SauceCard from "./SauceCard";

export class AllSauces extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
    this.filterProducts = this.filterProducts.bind(this);
    this.filterByPepper = this.filterByPepper.bind(this);
    this.enterSearch = this.enterSearch.bind(this);
  }

  componentDidMount() {
    this.props.getSauces();
    this.setState({ loading: false});
  }

  filterProducts(e) {
    e.preventDefault();
    const innerString = e.target.innerHTML;
    this.props.filterBy(innerString);
    document.getElementById("filterspan").innerHTML = innerString;
  }

  filterByPepper(e) {
    e.preventDefault();
    const innerString = e.target.innerHTML;
    this.props.filterByAPepper(innerString);
    document.getElementById("filterpepperspan").innerHTML = innerString;
  }

  enterSearch(e){
    e.preventDefault();
    const input = document.getElementById('inputSearchField').value;
    this.props.filterByInput(input)
  }

  render() {
    const { sauces, isAdmin } = this.props;
    const { loading } = this.state;
    const { filterProducts, filterByPepper, enterSearch } = this;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <React.Fragment>
        {isAdmin ? (
          <Link to="/sauces/create" className="buttons is-right">
            <button
              className="button is-link is-right"
              style={{ marginRight: "20px" }}
            >
              Add Hot Sauce
            </button>
          </Link>
        ) : (
          <div />
        )}

<div style={{ display: "flex", alignItems: "center" }}>
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
              <span id="filterpepperspan">All Peppers</span>
              <span className="icon is-small">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div className="dropdown-menu" id="dropdown-menu4" role="menu">
            <div className="dropdown-content" style={{ cursor: "pointer" }}>
              <div className="dropdown-item" onClick={filterByPepper}>
                <p>All Peppers</p>
              </div>
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
        <div
            className="control has-icons-left"
            style={{ marginLeft: "20px" }}
          >
            <input
              className="input is-danger"
              id='inputSearchField'
              type="text"
              name='searchString'
              placeholder="Search Sauce Name"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-search"></i>
            </span>
          </div>

          <button className='button is-danger' style={{marginLeft: '10px'}} onClick={enterSearch}>
              Search
          </button>
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
    filterByAPepper: (pepperString) =>
      dispatch(filterBySpecificPepper(pepperString)),
    filterBy: (filterTypeString) => dispatch(filterSauces(filterTypeString)),
    filterByInput: (input) => dispatch(filterByUserSearchString(input))
  };
};

export default connect(mapState, mapDispatch)(AllSauces);
