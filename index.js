const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.get("/ok", (req, res) => {
  return res.status(200).send({ message: "ok", time: new Date() });
});

app.listen(5000, () => {
  console.log("Running on port 5000.");
});

module.exports = app;
