import React from "react";
import { Link } from "react-router-dom";

const SauceCard = ({ sauce }) => {
  return (
    <div className="column is-3">
      <Link to={`/shop/${sauce.id}`} className="sauce-link">
        <figure className="media-center">
          <p>
            <img src={sauce.imageURL} className="sauceCardImg" />
          </p>
        </figure>
        <div className="media-content">
          <div className="field">
            <p className="control">
              <h1>{sauce.name}</h1>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SauceCard;
