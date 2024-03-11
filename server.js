const dotenv = require('dotenv').config();
const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = require('./DB/connection');
const app = require('./app');

connectDB();
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
