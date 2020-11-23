const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});