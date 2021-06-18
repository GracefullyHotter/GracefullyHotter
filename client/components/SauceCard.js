import React from "react";
import { Link } from "react-router-dom";

const SauceCard = ({ sauce }) => {
  return (

    <div className="card column is-3">
      <div className="card-image">
        <Link to={`/shop/${sauce.id}`} className="sauce-link">
          <figure className="image sauceCardImg">
            <img src={sauce.imageURL} alt="Placeholder image" />
          </figure>
        </Link>
      </div>
      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{sauce.name}</p>

        </div>
      </Link>
    </div>
  );
};

export default SauceCard;
