const stripe = require("stripe")(
  "sk_test_51J4aqTLayjJkaX4aKmQHs3alXfcsiPQrckAoye9U1dyp8squvZPVmGhJp7aOYB10tTsGS2nZxDLxmh4ypjMoSUtC00Pq2TkaNU"
);
const path = require("path");
const express = require("express");
const morgan = require("morgan");
const app = express();
module.exports = app;

const YOUR_DOMAIN = "https://gracefully-hotter.herokuapp.com/";

// logging middleware
app.use(morgan("dev"));

// body parsing middleware
app.use(express.json());

// auth and api routes
app.use("/auth", require("./auth"));
app.use("/api", require("./api"));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "..", "public/index.html"))
);

app.post("/create-checkout-session", async (req, res) => {
  const cart = req.body.map((item) => {
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
          images: [item.imageURL],
        },
        unit_amount: item.price,
      },
      quantity: item.quantity,
    };
  });
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: cart,
    mode: "payment",
    success_url: `${YOUR_DOMAIN}checkout/success`,
    cancel_url: `${YOUR_DOMAIN}checkout/failure`,
  });
  res.send({ id: session.id });
});

// static file-serving middleware
app.use(express.static(path.join(__dirname, "..", "public")));

// any remaining requests with an extension (.js, .css, etc.) send 404
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error("Not found");
    err.status = 404;
    next(err);
  } else {
    next();
  }
});

// sends index.html
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public/index.html"));
});

// error handling endware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});
