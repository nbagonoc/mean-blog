const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

// INITIALIZE APP
const app = express();

// ROUTERS
const authentication = require("./routes/authentication.js")(router);
const blog = require("./routes/blog.js")(router);

// CONFIGS
// mongoDB;
const db = require("./config/dbSecretKeys").mongoURI;

// CONNECT TO DB
mongoose
  .connect(db)
  .then(() => console.log("we are connected to our DB"))
  .catch(err => console.log(err));

// MIDDLEWARES
// cors
app.use(cors());
// body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// USE ROUTER
app.use("/authentication", authentication);
app.use("/blog", blog);

// STATIC FOLDER
app.use(express.static(path.join(__dirname, "public")));

// USE ANGULAR AS FRONTEND
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// SET PORT
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`we are live at ${port}`);
});
