const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/register", async (req, res, next) => {
  const data = req.body;

  if (data.uid) {
    const currentUser = await User.findOne({ uid: data.uid });

    if (currentUser) {
      res.status(200).json({
        message: "You are a current User",
        currentUser,
      });
    } else {
      const newUser = await User.create(data);

      res.status(200).json({
        message: "You are a new user and now registered in the DB",
        newUser,
      });
    }
  }
});

module.exports = router;
