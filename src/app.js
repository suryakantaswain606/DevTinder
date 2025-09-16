const express = require("express");
const { adminAuth, userAuth } = require("./middlewares/auth");
const app = express();

app.use("/admin", adminAuth);

app.get(
  "/user",
  userAuth,

  (req, res, next) => {
    res.send("user data sent");
  }
);
app.get(
  "/user/login",

  (req, res, next) => {
    res.send("please log in");
  }
);
app.get(
  "/admin/getAllData",

  (req, res, next) => {
    res.send("all data sent");
  }
);
app.get(
  "/admin/deleteAllData",

  (req, res, next) => {
    res.send("All data deleted");
  }
);

app.listen(4000, () => {
  console.log("listening");
});
