const express = require("express");
const router = express.Router();
const { loginUser } = require('../services/user');

router.post('/login', (req, res) => {
    console.log("request object starts ============");
    console.log(req, "request object");
    console.log("request object ends ============");
    const email = req.body.email;
    const password = req.body.password;

    const response = loginUser(email,password);
    response.catch(err => {
        console.log("Something went wrong");
        console.log(err.message);
        res.status(500).send("Something went wrong");
    }).then(data => {
        console.log(data);
        if (data === null) {
            res.status(403).send("Sorry! Invalid username or password");
        }
        else {
            console.log(".------------------")
            console.log(data, "data")
            res.status(200).send({ ...data._doc,...{ message: "You are successfully logged in" }});
        }
    });
});

module.exports = router;