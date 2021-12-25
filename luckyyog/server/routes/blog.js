const express = require('express');
const router = express.Router();
const { addBlog, getBlogs } = require('../services/blog');

router.post("/blog", async (req, res) => {
    let title = req.body.title;
    let description = req.body.description;
    let post = req.body.post;
    let author = req.body.author;
    let response = await addBlog(title, description, post, author);
    res.status(response.statusCode).json(response.data);
});

router.get('/blog', async (req, res) => {
    let response = await getBlogs();
    res.status(response.statusCode).json(response.data);
});

module.exports = router;