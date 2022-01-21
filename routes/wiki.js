const express = require("express");
const res = require("express/lib/response");
const wikiRouter = express.Router();
const { addPage } = require("../views");

wikiRouter.get("/", (req, res) => {
  res.send("WIKI");
});

wikiRouter.post("/", (req, res) => {
  res.send("WIKI");
});

wikiRouter.get("/add", (req, res) => {
  res.send(addPage());
});

module.exports = wikiRouter;
