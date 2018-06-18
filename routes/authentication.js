const User = require("../models/User");
const jwt = require("jsonwebtoken");
const db = require("../config/dbSecretKeys");

module.exports = router => {
  //   POST | register
  router.post("/register", (req, res) => {
    if (!req.body.email) {
      res.json({ success: false, message: "email is required" });
    } else if (!req.body.username) {
      res.json({ success: false, message: "username is required" });
    } else if (!req.body.password) {
      res.json({ success: false, message: "password is required" });
    } else {
      let user = new User({
        email: req.body.email.toLowerCase(),
        username: req.body.username.toLowerCase(),
        password: req.body.password
      });
      user.save(err => {
        if (err) {
          if (err.code === 11000) {
            res.json({
              success: false,
              message: "Username or email already exist"
            });
          } else if (err.errors) {
            if (err.errors.email) {
              res.json({
                success: false,
                message: err.errors.email.message
              });
            } else if (err.errors.username) {
              res.json({
                success: false,
                message: err.errors.username.message
              });
            } else if (err.errors.password) {
              res.json({
                success: false,
                message: err.errors.password.message
              });
            } else {
              res.json({ success: false, message: err });
            }
          } else {
            res.json({
              success: false,
              message: "Something went wrong. Please try again"
            });
          }
        } else {
          res.json({ success: true, message: "You are now registered!" });
        }
      });
    }
  });

  // check email
  router.get("/checkEmail/:email", (req, res) => {
    if (!req.params.email) {
      res.json({ success: false, message: "email was not provided" });
    } else {
      User.findOne({ email: req.params.email }, (err, user) => {
        if (err) {
          res.json({ success: false, message: err });
        } else {
          if (user) {
            res.json({ success: false, message: "email is already taken" });
          } else {
            res.json({ success: true, message: "email is available" });
          }
        }
      });
    }
  });

  // check username
  router.get("/checkUsername/:username", (req, res) => {
    if (!req.params.username) {
      res.json({ success: false, message: "username was not provided" });
    } else {
      User.findOne({ username: req.params.username }, (err, user) => {
        if (err) {
          res.json({ success: false, message: err });
        } else {
          if (user) {
            res.json({ success: false, message: "username is already taken" });
          } else {
            res.json({ success: true, message: "username is available" });
          }
        }
      });
    }
  });

  // login user
  router.post("/login", (req, res) => {
    if (!req.body.username) {
      res.json({ success: false, message: "no username was provided" });
    } else if (!req.body.password) {
      res.json({ success: false, message: "no password was provided" });
    } else {
      User.findOne(
        { username: req.body.username.toLowerCase() },
        (err, user) => {
          if (err) {
            res.json({ success: false, message: err });
          } else if (!user) {
            res.json({ success: false, message: "username not found" });
          } else {
            const validPassword = user.comparePassword(req.body.password);
            if (!validPassword) {
              res.json({ success: false, message: "invalid password" });
            } else {
              const token = jwt.sign({ userId: user._id }, db.secretOrKey, {
                expiresIn: "24h"
              });

              res.json({
                success: true,
                message: "success!",
                token,
                user: { username: user.username }
              });
            }
          }
        }
      );
    }
  });

  // comment when testing in postman
  router.use((req, res, next) => {
    const token = req.headers["authorization"];
    if (!token) {
      res.json({ success: false, message: "No token provided" });
    } else {
      jwt.verify(token, db.secretOrKey, (err, decoded) => {
        if (err) {
          res.json({ success: false, message: "token invalid" });
        } else {
          req.decoded = decoded;
          next();
        }
      });
    }
  });

  // get profile data
  router.get("/profile", (req, res) => {
    User.findOne({ _id: req.decoded.userId })
      .select("username email")
      .exec((err, user) => {
        if (err) {
          res.json({ success: false, message: err });
        } else {
          if (user) {
            res.json({ success: true, user });
          } else {
            res.json({ success: false, message: "User not found" });
          }
        }
      });
  });

  return router;
};
