const express = require("express");
const res = require("express/lib/response");
const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
  res.send("USERS");
});

userRouter.post("/", (req, res, next) => {
  res.send("USERS");
});

userRouter.get("/add", (req, res, next) => {
  res.send("USERS");
});

module.exports = userRouter;
