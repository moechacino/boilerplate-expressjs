require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());

// routes

const start = async () => {
  try {
    app.listen(
      port,
      console.log(`server is listening on http://localhost:${port}`)
    );
  } catch (error) {
    console.error(error);
  }
};

start();
