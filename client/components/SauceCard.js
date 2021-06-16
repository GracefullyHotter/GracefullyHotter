import React from "react";

const SauceCard = ({ sauce, history }) => {
  return (
    <div
      className="column is-3"
      onClick={() => history.push(`/shop/${sauce.id}`)}
    >
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
    </div>
  );
};

export default SauceCard;
