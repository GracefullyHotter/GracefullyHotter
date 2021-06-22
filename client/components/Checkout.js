import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
// import "./App.css";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51J4aqTLayjJkaX4aO6jdnlMHpy5nM4L7cgpTq9Ke2mqDDq3QKT0mfG140yDHbFvD6VK8ZDbt06D9ZKVUTiBQQaPR0059PnEw0Z"
);

const cart = JSON.parse(localStorage.getItem("cart"));
console.log(cart);

const ProductDisplay = ({ handleClick }) => (
  <section style={{ textAlign: "center", margin: "auto" }}>
    <h1 style={{ textAlign: "center", margin: "auto" }}>Checkout</h1>
    {cart.map((item, idx) => (
      <div style={{ margin: "100px" }} key={item.id}>
        <div className="product">
          <img
            style={{ width: "200px", height: "350px" }}
            src={item.imageURL}
          />
          <div className="description">
            <h3>{item.name}</h3>
            <h5>${((item.price / 100) * item.quantity).toFixed(2)}</h5>
          </div>
        </div>
      </div>
    ))}
    <button
      style={{ marginBottom: "100px" }}
      type="button"
      id="checkout-button"
      role="link"
      onClick={handleClick}
    >
      Proceed To Payment
    </button>
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  const handleClick = async (event) => {
    const stripe = await stripePromise;

    const response = await axios.post("/create-checkout-session", cart);
    console.log(response);
    const session = await response.data;

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };

  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay handleClick={handleClick} />
  );
}
