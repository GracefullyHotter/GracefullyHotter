import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <section class="hero is-dark is-fullheight">
      <div
        class="hero-body"
        style={{
          position: "fixed",
          bottom: "0",
          top: "0",
          width: "100%",
          height: "100%",
          padding: "100px",
        }}
      >
        <video
          style={{
            opacity: "0.1",
            position: "fixed",
            zIndex: "-1",
            width: "100%",
            left: "0",
          }}
          autoPlay
          muted
          loop
          src="https://player.vimeo.com/external/297888040.sd.mp4?s=16faac8f64154e964d3b18c2cc39bba5353870bc&profile_id=164&oauth2_token_id=57447761"
          type="video/mp4"
        ></video>
        <div>
          <p id="landingtitle">Welcome to Gracefully Hotter</p>
          <p id="landingsubtitle" className="subtitle">
            Continually Matching Hot Sauces With Individuals
          </p>
          <Link
            to="/shop"
            id="landingbutton"
            className="button is-large is-light"
          >
            🔥Browse🔥
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
