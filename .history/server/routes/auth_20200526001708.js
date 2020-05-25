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
            bcrypt.hash(password, 12).then(hashedpassword => {
                const user = new User({ email, name, password: hashedpassword });
                user
                    .save()
                    .then(user => {
                        res.json({ message: "saved successfully" });
                    })
                    .catch(err => {
                        console.log(err);
                    });
            });
        })
        .catch(err => {
            console.log(err);
        });
});

router.post("/signin", (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(422).json({ error: "Please add email or password!" });
    }
    user.findOne({ email: email }).then(savedUser => {
        if (!savedUser) {
            return res
                .status(422)
                .json({ error: "That email is not registered, please signup!" });
        }
        bcrypt.compare(password, savedUser.password).then(doMatch => {
            if (doMatch) {
                res.json({ message: "successfully signed in!" });
            }
        });
    });
});

module.exports = router;