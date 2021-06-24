import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div style={{ margin: "auto", textAlign: "center", width: "50%" }}>
      <img src="../../cat404.jpeg" />
      <Link
        to="/"
        style={{ textDecoration: "none", color: "black", textAlign: "center" }}
      >
        <h1>Go back home</h1>
      </Link>
    </div>
  );
};

export default PageNotFound;
