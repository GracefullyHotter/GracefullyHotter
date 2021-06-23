import React from "react";
import { Link } from "react-router-dom";

const SauceCard = ({ sauce }) => {
  return (
    <div className="card column is-3">
      <Link to={`/shop/${sauce.id}`} className="sauce-link">
        <div className="card-image">
          <figure className="image sauceCardImg">
            <img src={sauce.imageURL} alt="Placeholder image" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media-content">
            <p className="title is-4">{sauce.name}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SauceCard;
