import { useEffect, useState } from "react";
import axios from "axios";

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:4000/blog')
            .then(response => {
                setBlogs(response.data.data);
            }).catch(error => {
                console.log(error, "error in fetching blogs list");
            })
    });

    return (
        <div className="blog-list-container">
            {blogs.length ?
                <ul>
                    {blogs.map(blog => <li key={blog._id}>{blog.title}</li>)}
                </ul>
                :
                "No Blogs Found"
            }
        </div >
    )
}

export default BlogList;