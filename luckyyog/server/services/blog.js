const blogModel = require('../models/blog');
const utils = require('../utils/index');
const { STRINGS, STATUS_CODES } = require('../shared/index');
const blogServices = {};

blogServices.addBlog = (title, description, post, author) => {
    return new Promise((resolve, reject) => {

        let newBlog = new blogModel({
            title,
            description,
            post,
            author
        });

        newBlog.save().then(response => {
            console.log(response, "response from DB on saving data");
            resolve(utils.sendResponse(STATUS_CODES.SUCCESS, {
                message: STRINGS.BLOG_SAVED,
                data: response
            }))
        }).catch(err => {
            console.log("Main nhi save kr rha data");
            console.log(err.message);
            reject(utils.sendResponse(STATUS_CODES.ERROR, {
                message: STARINGS.BLOG_SAVE_FAILED
            }));
        })
    })
    // return Promise.resolve(utils.sendResponse(200, { message: "success", data: "test" }));
}

module.exports = blogServices;