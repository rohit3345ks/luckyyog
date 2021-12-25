import React, { useState } from 'react';
import Editor from '../Editor';
import axios from 'axios';
import "./style.css";

const BlogForm = () => {

    const [formValues, setFormValues] = useState({
        title: "",
        description: "",
        post: "",
        author: JSON.parse(localStorage.getItem('signedInUser') || '')?._id ?? ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("values being sent through API", formValues);

        axios.post('http://localhost:4000/blog', {
            ...formValues
        }).then((response) => {
            console.log(response.data, "response from server")
        }).catch(err => {
            console.log("Request failed");
            console.log(err.message);
        })
    }

    return (
        <div className="form-container" >
            <b>Add / Update Blog</b>
            <form onSubmit={handleSubmit}>
                {/* Blog Title */}
                <label htmlFor="blog-title" className="input-field-container">
                    <span>Blog Title:</span>
                    <input type="text" id="blog-title" value={formValues.title} placeholder="Enter Blog Title" className="input-field"
                        onChange={(e) => { setFormValues({ ...formValues, title: e.target.value }) }}
                    />
                </label>

                {/* Blog Description */}
                <label htmlFor="blog-description" className="input-field-container">
                    <span>Blog Description:</span>
                    <textarea row="3" cols="50" value={formValues.description} className="input-field" id="blog-description" placeholder="Enter Blog Description"
                        onChange={(e) => { setFormValues({ ...formValues, description: e.target.value }) }}
                    ></textarea>
                </label>

                {/* Blog Post */}
                <label htmlFor="blog-post" className="input-field-container">
                    <span>Blog Post:</span>
                    <div style={{ width: "80%", padding: 5 }}>
                        <Editor
                            value={formValues.post}
                            changeHandler={(value) => setFormValues({ ...formValues, post: value })}
                            id='blog-post'
                        />
                    </div>

                </label>
                <input className="submitField" type="submit" value="Publish Blog" />
            </form>
        </div >
    )
}

export default BlogForm;