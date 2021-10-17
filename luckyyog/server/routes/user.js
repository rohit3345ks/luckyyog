const express = require("express");
const bcrypt = require('bcrypt');
let saltRounds = 10;
const router = express.Router();
const { loginUser, logoutUser } = require('../services/user');

router.post('/login', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const response = await loginUser(email,password);
    res.status(response.statusCode).json(response.data);
});

router.get('/getHash', (req, res) => {
    const { query: { password } } = req;
    bcrypt.hash(password, saltRounds).then(hash => {
        res.json({ password, hash });
    }).catch(err => {
        console.log(err, "error in hashing");
    });
});

module.exports = router;