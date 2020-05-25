const express = require("express");

const router = express.Router();

const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcryptjs");
router.post("/signup", (req, res) => {
    const { name, email, password } = req.body;
    if (!email || !password || !name) {
        return res.status(422).json({ error: "Please fill all the fields" });
    }
    User.findOne({ email: email })
        .then(savedUser => {
            if (savedUser) {
                return res
                    .status(422)
                    .json({ error: "User already exist with that email!" });
            }
            bcrypt.hash(password, 12);
            const user = new User({
                email,
                name,
                password,
            });
            user
                .save()
                .then(user => {
                    res.json({ message: "saved successfully" });
                })
                .catch(err => {
                    console.log(err);
                });
        })
        .catch(err => {
            console.log(err);
        });
});

module.exports = router;