const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require('dotenv').config(); // Load environment variables from .env file

const jwtSecret = process.env.JWT_SECRET || "default_secret"; // Use environment variable

// Route to create a new user
router.post("/createuser", 
    [body('email', 'Invalid email').isEmail(),
    body('name', 'Name must be at least 5 characters long').isLength({ min: 5 }),
    body('password', 'Password must be at least 5 characters long').isLength({ min: 5 })
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const salt = await bcrypt.genSalt(10);
            let secPassword = await bcrypt.hash(req.body.password, salt);
            await User.create({
                name: req.body.name,
                password: secPassword,
                email: req.body.email,
                location: req.body.location
            });
            res.json({ success: true });
        } catch (error) {
            console.error(error.message);
            res.status(500).json({ success: false, message: "Internal Server Error" });
        }
    }
);

// Route to login a user
router.post("/loginuser",
    [body('email', 'Invalid email').isEmail(),
    body('password', 'Password must be at least 5 characters long').isLength({ min: 5 })
    ], async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        let email = req.body.email;
        try {
            let userdata = await User.findOne({ email });
            if (!userdata) {
                return res.status(400).json({ error: "User does not exist" });
            }
            const pwdCompare = await bcrypt.compare(req.body.password, userdata.password);
            if (!pwdCompare) {
                return res.status(400).json({ error: "Incorrect password" });
            }
            const data = {
                user: {
                    id: userdata.id
                }
            };
            const authToken = jwt.sign(data, jwtSecret);
            return res.json({ success: true, authToken: authToken });
        } catch (error) {
            console.error(error.message);
            res.status(500).json({ success: false, message: "Internal Server Error" });
        }
    }
);

module.exports = router;
