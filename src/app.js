const express = require("express");
const app = express();

app.use("/shop", (req, res) => {
  res.send("thanks for using our service");
});
app.use("/cart", (req, res) => {
  res.send("cart is empty");
});
app.use("/list", (req, res) => {
  res.send("list is full");
});

app.listen(4000, () => {
  console.log("listening");
});
