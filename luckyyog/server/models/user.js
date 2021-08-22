const { model } = require("mongoose");
const userSchema = require("../schemas/user");

const userModel = model("user", userSchema);

module.exports = userModel;