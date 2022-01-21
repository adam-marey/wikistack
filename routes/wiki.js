const express = require("express");
const res = require("express/lib/response");
const wikiRouter = express.Router();
const { addPage } = require("../views");
const { Page } = require("../models");
const { addPage } = require("../views");
const { Router } = require("express");

wikiRouter.post('/', async (req, res, next) => {
  try {
    const page = await Page.create({
      title: 
      content: 
    })
    res.redirect('/')
  } catch (error) {
    next(error)
  }
})

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
