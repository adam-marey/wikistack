const express = require("express");
const res = require("express/lib/response");
const app = express();
const morgan = require("morgan");
const { db, Page, User } = require("./models");
const wikiRouter = require("./routes/wiki");
const userRouter = require("./routes/users");

db.authenticate().then(() => {
  console.log("connected to the database");
});

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/wiki", wikiRouter);
app.use("/user", userRouter);

app.get("/", (req, res, next) => {
  res.redirect("/wiki");
});

const init = async () => {
  // await Page.sync();
  // await User.sync();
  await db.sync({ force: true });
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`now listening at Port: ${PORT}`);
  });
};

init();
