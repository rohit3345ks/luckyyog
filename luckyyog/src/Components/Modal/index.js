import React from 'react'
import closeIcon from "../../assets/close_icon.svg";
import "./style.css";

const Modal = ({ children, open = false, toggleModal = () => { } }) => {
    return (
        <>
            {open ? <>
                <div className="back-drop" onClick={toggleModal}></div>
                <div className={`category modal-container${open ? " active" : ""}`}>
                    <button className="close-button" onClick={toggleModal}><img src={closeIcon} alt="Close" /></button>
                    This will be the Modal

                    {children}
                </div></> : null}
        </>
    )
}

export default Modal;
