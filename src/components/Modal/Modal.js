import React from "react";
import "./Modal.css";

function Modal({movieTitle, movieGif, closeModal}) {
    return (
        <div className = "modal">
            <div className = "modal-content">
                Rented {movieTitle} successfully!
                <button className = "close-button" onClick = {closeModal}>
                    x
                </button>
                <iframe className="modal-gif" src = {movieGif} width = "50" height = "50"></iframe>
            </div>
        </div>
    )
        ;
}

export default Modal;