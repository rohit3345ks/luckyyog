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
            resolve(utils.sendResponse(STATUS_CODES.SUCCESS, {
                message: STRINGS.BLOG_SAVED,
                data: response
            }))
        }).catch(err => {
            console.log(err.message);
            reject(utils.sendResponse(STATUS_CODES.ERROR, {
                message: STARINGS.BLOG_SAVE_FAILED,
                data: null
            }));
        })
    });
}

blogServices.getBlogs = () => {
    return new Promise((resolve, reject) => {
        blogModel.find().then(response => {
            resolve(utils.sendResponse(STATUS_CODES.SUCCESS, {
                message: STRINGS.BLOG_FETCHED,
                data: response
            }));
        }).catch(err => {
            console.log(err.message, "error in GET /blog");
            reject(utils.sendResponse(STATUS_CODES.ERROR, {
                message: STRINGS.BLOG_FETCH_ERROR,
                data: null
            }));
        })
    })
}

module.exports = blogServices;