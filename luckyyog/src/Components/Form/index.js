import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.core.css';
import "./style.css";

const BlogForm = () => {

    const [formValues, setFormValues] = useState({
        title: "",
        description: "",
        post: ""
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues, "values");
    }

    const quillModules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'blockquote'],        // toggled buttons      // custom button values
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
            [{ 'font': [] }],
            [{ 'align': [] }],
            ['clean', "image", "video"]                                         // remove formatting button
        ]
    }

    return (
        <div className="form-container">
            <b>Add / Update Blog</b>
            <form onSubmit={handleSubmit}>
                {/* Blog Title */}
                <label for="blog-title" className="input-field-container">
                    <span>Blog Title:</span>
                    <input type="text" id="blog-title" value={formValues.title} placeholder="Enter Blog Title" className="input-field"
                        onChange={(e) => { setFormValues({ ...formValues, title: e.target.value }) }}
                    />
                </label>

                {/* Blog Description */}
                <label for="blog-description" className="input-field-container">
                    <span>Blog Description:</span>
                    <textarea row="3" cols="50" value={formValues.description} className="input-field" id="blog-description" placeholder="Enter Blog Description"
                        onChange={(e) => { setFormValues({ ...formValues, description: e.target.value }) }}
                    ></textarea>
                </label>

                {/* Blog Post */}
                <label for="blog-post" className="input-field-container">
                    <span>Blog Post:</span>
                    <ReactQuill
                        id="blog-post"
                        className="input-field"
                        value={formValues.post}
                        onChange={(value) => { setFormValues({ ...formValues, post: value }) }}
                        modules={quillModules}
                    />
                    {/* <textarea id="blog-post" value={formValues.post} cols="50" row="150" className="input-field" placeholder="Write your beautiful blog here"
                        onChange={(e) => { setFormValues({ ...formValues, post: e.target.value }) }}
                    ></textarea> */}
                </label>
                <input className="submitField" type="submit" value="Publish Blog" />
            </form>
        </div>
    )
}

export default BlogForm;