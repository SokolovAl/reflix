import React from "react";
import "./Modal.css";

function Modal({movieName, closeModal}) {
    return (
        <div className = "modal">
            <div className = "modal-content">
                Rented {movieName} successfully!
                <button className = "close-button" onClick = {closeModal}>
                    x
                </button>
            </div>
        </div>
    );
}

export default Modal;
