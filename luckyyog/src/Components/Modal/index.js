import React from 'react'
import closeIcon from "../../assets/close_icon.svg";
import "./style.css";

const Modal = ({ children, open = false, toggleModal = () => { } }) => {
    return (
        <>
            <div className={`back-drop${open ? " active" : ""}`} onClick={toggleModal}></div>
            <div className={`category modal-container${open ? " active" : ""}`}>
                <button className="close-button" onClick={toggleModal}><img src={closeIcon} alt="Close" /></button>
                <div className="modal-child">
                    {children}
                </div>
            </div>
        </>
    )
}

export default Modal;
