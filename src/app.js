const express = require("express");
const app = express();

app.get(
  "/user",
  [
    (req, res, next) => {
      next();
      // res.send("Route Handler 1");
    },
    (req, res, next) => {
      // res.send("2");
      next();
    },
  ],
  (req, res, next) => {
    // res.send("3");
    next();
  },
  (req, res, next) => {
    res.send("4");
    // next();
  }
);

app.listen(4000, () => {
  console.log("listening");
});
