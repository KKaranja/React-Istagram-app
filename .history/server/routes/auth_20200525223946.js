const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("hello hello");
});

router.post("/signup", (req, res) => {
    const { name, email, password } = req.body;
});

module.exports = router;