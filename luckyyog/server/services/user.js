const jwt = require('jsonwebtoken');
const userModel = require("../models/user");
const utils = require("../utils/index");
const { CONSTANTS } = require("../shared/index");


let userServices = {};

userServices.loginUser = (email, password) => {

    return new Promise((resolve, reject) => {
        const response = userModel.findOne({ email, password }).exec();
        response.catch(err => {
            resolve(utils.sendResponse(500, err.message));
        }).then(data => {
            if (data === null) {
                resolve(utils.sendResponse(403, CONSTANTS.VALID_TOKEN_REQUEST));
            }
            else {
                let token = jwt.sign(data._doc, "januaryFirst");
                resolve(utils.sendResponse(200, {
                    message: CONSTANTS.LOGGED_IN,
                    authToken: token || "",
                    data: data?._doc ?? null
                }));
            }
        });
    });
}

module.exports = userServices;