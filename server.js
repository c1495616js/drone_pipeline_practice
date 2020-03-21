const express = require("express");

var app = express();

app.get("/", (req, res) => {
  res.status(200).send({
    name: "John",
    age: 26
  });
});

module.exports.app = app;
