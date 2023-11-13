const router = require("express").Router();
const User = require("../models/User");

// REGISTER
router.get("/register", async (req, res) => {
  const newUser = await new User({
    username: "john",
    email: "asdsa@gmail.com",
    password: "123456",
  });

  await newUser.save(); // <-- Fix the typo here
  res.send("ok");
});

module.exports = router;
