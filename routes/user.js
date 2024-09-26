const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
const { User } = require("../schema/user.schema")

router.post(("/register"), async (req, res) =>{
    const { name, email, password } = req.body;
    const ifUserExists = await User.findOne({ email });
    if(ifUserExists) {
        return res.status(400).json({message: "User already exists"});
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    res.status(201).json({message: " User created successfully" });
})

module.exports = router;