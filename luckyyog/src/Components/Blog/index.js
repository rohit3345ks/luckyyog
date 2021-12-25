import React, { useState } from 'react';
import BlogList from '../BlogList';
import BlogForm from '../Form';
import Modal from "../Modal";

const Blog = ({ isLoggedIn }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState(null);
    const toggleModal = () => {
        setIsModalOpen(isModalOpen => !isModalOpen);
    }

    return (
        <>
            <Modal
                open={isModalOpen}
                toggleModal={toggleModal}
            >
                <BlogForm toggleModal={toggleModal} />
            </Modal>
            {isLoggedIn ?
                (<div className="blog-container">
                    <div className='blog-header'>
                        <h2 className='heading'> Admin Blog Page </h2>
                        <button className="button" onClick={toggleModal}> Add Blog </button>
                    </div>
                    <BlogList />
                </div>)
                :
                (<div className="blog-container">
                    <div className='blog-header'>
                        <h1 style={{ color: "#000" }}>Normal User Blog Page</h1>
                    </div>
                    <BlogList />
                </div>)
            }
        </>
    )
}

export default Blog;