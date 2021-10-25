import React, { useState } from 'react';
import Modal from "../Modal";

const Blog = ({ isLoggedIn }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(isModalOpen => !isModalOpen);
    }

    return (
        <>
            <Modal
                open={isModalOpen}
                toggleModal={toggleModal}
            >
                Hi
            </Modal>
            {isLoggedIn ?
                (<div className="blog-container">
                    <div className='blog-header'>
                        <h2 className='heading'> Admin Blog Page </h2>
                        <button className="button" onClick={toggleModal}> Add Blog </button>
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