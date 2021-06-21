const router = require("express").Router();
const {
  models: { User },
} = require("../db");
const jwt = require("jsonwebtoken");
module.exports = router;

router.post("/login", async (req, res, next) => {
  try {
    res.send({ token: await User.authenticate(req.body) });
  } catch (err) {
    next(err);
  }
});

router.post("/signup", async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.send({ token: await user.generateToken() });
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      res.status(401).send("User already exists");
    } else {
      next(err);
    }
  }
});

router.get("/me", async (req, res, next) => {
  try {
    res.send(await User.findByToken(req.headers.authorization));
  } catch (ex) {
    next(ex);
  }
});

router.put("/check", async (req, res, next) => {
  console.log(req.body);
  try {
    const token = req.headers.authorization;
    const { id } = await jwt.verify(token, process.env.JWT);
    if (id) {
      let response = {};
      const data = await User.findAll({
        where: {
          name: req.body.name,
        },
      });
      if (!!data.length) {
        response["nameTaken"] = true;
      } else {
        response["nameTaken"] = false;
      }
      const datatwo = await User.findAll({
        where: {
          email: req.body.email,
        },
      });
      if (!!datatwo.length) {
        response["emailTaken"] = true;
      } else {
        response["emailTaken"] = false;
      }
      res.send(response);
    }
  } catch (ex) {
    next(ex);
  }
});

router.put("/updateprofile", async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const { id } = await jwt.verify(token, process.env.JWT);
    if (id) {
      const userToUpdate = await User.findByPk(req.body.id);
      res.send(await userToUpdate.update(req.body));
    }
  } catch (ex) {
    next(ex);
  }
});
