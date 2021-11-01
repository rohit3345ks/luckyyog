const { model } = require('mongoose');
const blogSchema = require('../schemas/blog');

const blogModel = model("blog", blogSchema);

module.exports = blogModel;