const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.send("User list");
});

router.get("/new", (req, res) => {
  res.send("User new form");
});

router.post("/", (req, res) => {
  res.send("Create Users");
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
