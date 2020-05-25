const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("hello hello");
});

router.post("/signup", (req, res) => {
    const { name, email, password } = req.body;
    if (!email || !password || !name) {
        res.json({ error: "Please fill all the fields" });
    }
});

module.exports = router;