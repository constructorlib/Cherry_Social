const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
//update user
router.put("/:id", async (req, res) => {
  if (req.body.userID === req.params.id || req.user.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        return res.status.json(err);
      }
    }
  } else {
    return res.status(403).json("You cannot update this info");
  }
});
//delete user
//getsin user
//follow user
//follow not

module.exports = router;
