const express = require("express");
const router = express.Router();
const { loginUser, logoutUser } = require('../services/user');

router.post('/login', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const response = await loginUser(email,password);
    res.status(response.statusCode).json(response.data);
});

module.exports = router;