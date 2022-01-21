const express = require("express");
const res = require("express/lib/response");
const app = express();
const morgan = require("morgan");

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  console.log("hello");
  res.send("hello");
});
const PORT = 1338;
app.listen(PORT, () => {
  console.log("hello 1337");
});
