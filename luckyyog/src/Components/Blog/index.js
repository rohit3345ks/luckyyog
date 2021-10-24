import React from 'react'

const Blog = ({ isLoggedIn }) => {
    return (
        <>
            {isLoggedIn ?
                (<div className="blog-container">
                    <div className='blog-header'>
                        <h2 className='heading'> Admin Blog Page </h2>
                        <button className="button"> Add Blog </button>
                    </div>
                </div>)
                :
                (<div className="blog-container">
                    <h1 style={{ color: "#000" }}>Normal User Blog Page</h1>
                </div>)
            }
        </>
    )
}

export default Blog;