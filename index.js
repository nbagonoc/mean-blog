const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

// INITIALIZE APP
const app = express();

// CONFIGS
// mongoDB;
const db = require("./config/dbSecretKeys").mongoURI;

// CONNECT TO DB
mongoose
  .connect(db)
  .then(() => console.log("we are connected to our DB"))
  .catch(err => console.log(err));

// STATIC FOLDER
app.use(express.static(path.join(__dirname, "client/dist/client")));

// USE ANGULAR AS FRONTEND
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/dist/client/index.html"));
});

// SET PORT
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`we are live at ${port}`);
});
