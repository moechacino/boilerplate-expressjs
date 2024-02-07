require("dotenv").config({ path: "./env/local.env" });
require("express-async-errors");
require("./config/db");

const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 9000;
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const routes = require("./routes");

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(notFound);
app.use(errorHandlerMiddleware);

const start = () => {
  try {
    app.listen(port, () => {
      console.log(`server is listening on http://localhost:${port}`);
    });
  } catch (error) {
    console.error(error);
  }
};

start();
