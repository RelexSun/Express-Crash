const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", logger, (req, res) => {
  res.render("index", { text: "World" });
});

const userRouter = require("./routes/user");

app.use("/users", userRouter);

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

app.listen(3001);
