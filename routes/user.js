const express = require("express");
const router = express.Router();

router.use(logger);

router.get("/", (req, res) => {
  console.log(req.query.name);
  res.send("User list");
});

router.get("/new", (req, res) => {
  res.render("users/new");
});

router.post("/", (req, res) => {
  const isValid = true;
  if (isValid) {
    users.push({ firstName: req.body.firstName });
    res.redirect(`/users/${users.length - 1}`);
  } else {
    console.log("Error");
    res.render("user/new", { firstName: req.body.firstName });
  }
});

router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user);
    req.params.id;
    res.send(`Get user with id ${req.params.id}`);
  })
  .put((req, res) => {
    req.params.id;
    res.send(`Update user with id ${req.params.id}`);
  })
  .delete((req, res) => {
    req.params.id;
    res.send(`Delete user with id ${req.params.id}`);
  });

const users = [{ name: "sun" }, { name: "haha" }];

router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

// -------- The same as the code above --------
// router.get("/:id", (req, res) => {
//   req.params.id;
//   res.send(`Get user with id ${req.params.id}`);
// });

// router.post("/:id", (req, res) => {
//   req.params.id;
//   res.send(`Update user with id ${req.params.id}`);
// });

// router.delete("/:id", (req, res) => {
//   req.params.id;
//   res.send(`Delete user with id ${req.params.id}`);
// });

module.exports = router;
