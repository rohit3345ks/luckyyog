const userModel = require("../models/user");

let userServices = {};

userServices.loginUser = (email,password) => {
    const response = userModel.findOne({email,password}).exec();
    return response;
}

module.exports = userServices;