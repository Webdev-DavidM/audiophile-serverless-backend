// I have chosen to use ES6 modules in this project rather than common js require. To do this I have added   "type": "module" in the package json file. also to note es6 modules

// importing environmental variables
import "./loadEnv.js";

// const serverless = require("serverless-http");
import serverless from "serverless-http";

// import express

import express from "express";
const app = express();

//cors variable
import cors from "cors";

// morgan is a middle ware which will details all http requests in the console

// adjust the data connection below as required.

app.use(cors());

// morgan logs any http requests in the console for tracking.
import morgan from "morgan";
app.use(morgan("combined"));

// here I am importing the database which has been set up in the config folder, in node always put the filename at the end

import connectDB from "./config/db.js";
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// below runs the request through each use line of code, adjust as need be

import productsRouter from "./routes/products.js";

app.use("/products", productsRouter);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(505).json("There has been an error");
  next();
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("listening on port", port);
});

export const handler = serverless(app);
