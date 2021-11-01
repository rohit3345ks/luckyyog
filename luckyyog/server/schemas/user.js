const { Schema } = require("mongoose");

const userSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    name: String
}, { collection: "user" });

module.exports = userSchema;