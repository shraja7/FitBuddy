const router = require("express").Router();
const User = require("../models/user.model");

// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(400).json("Error: " + error);
  }
});

// Add a new user
router.post("/add", async (req, res) => {
  const username = req.body.username;
  const newUser = new User({ username });

  try {
    await newUser.save();
    res.json("User added!");
  } catch (error) {
    res.status(400).json("Error: " + error);
  }
});

module.exports = router;
