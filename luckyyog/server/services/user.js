const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userModel = require("../models/user");
const utils = require("../utils/index");
const { STRINGS, STATUS_CODES } = require("../shared/index");

let userServices = {};

userServices.loginUser = (email, password) => {

    return new Promise((resolve, reject) => {
        const response = userModel.findOne({ email }).exec();
        response.catch(err => {
            resolve(utils.sendResponse(STATUS_CODES.ERROR, err.message));
        }).then(data => {
            if (data === null) {
                resolve(utils.sendResponse(STATUS_CODES.FORBIDDEN, STRINGS.INVALID_EMAIL_PWD));
            }
            else {
                bcrypt.compare(password, data._doc.password).then(result => {
                    if (result) {
                        let token = jwt.sign(data._doc, "januaryFirst");
                        resolve(utils.sendResponse(STATUS_CODES.SUCCESS, {
                            message: STRINGS.LOGGED_IN,
                            authToken: token || "",
                            data: (data && data._doc) || null
                        }));
                    }
                    else {
                        resolve(utils.sendResponse(STATUS_CODES.FORBIDDEN, STRINGS.INVALID_EMAIL_PWD));
                    }
                })
            }
        });
    });
}

module.exports = userServices;