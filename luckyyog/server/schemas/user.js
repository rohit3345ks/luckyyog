const {Schema} = require("mongoose");

const userSchema = new Schema({
    username: String,
    email: String,
    password: String
},{collection: "user"});

module.exports = userSchema;