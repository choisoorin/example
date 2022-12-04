// @ts-check

const express = require("express");
const db = require("../controllers/userController");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("user");
});

router.get("/", async (req, res) => {
  const ARTICLE = await db.getAllArticles();
  res.render("example", {
    ARTICLE,
  });

  // res.send("userList");
});

module.exports = router;
