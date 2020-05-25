const express = require("express");

const router = express.Router();

const mongoose = require("mongoose");
const User = mongoose.model("User");

router.get("/", (req, res) => {
    res.send("hello hello");
});

router.post("/signup", (req, res) => {
    const { name, email, password } = req.body;
    if (!email || !password || !name) {
        return res.status(422).json({ error: "Please fill all the fields" });
    }
    User.findOne({ email: email });
});

module.exports = router;