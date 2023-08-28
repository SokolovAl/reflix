import React from "react";
import "./Modal.css";

function Modal({movieTitle, movieGif, closeModal}) {
    return (
        <div className = "modal">
            <div className = "modal-content">
                Rented <span id = "movie-title">{movieTitle}</span> successfully!
                <button className = "close-button" onClick = {closeModal}>
                    x
                </button>
                <iframe className = "modal-gif" src = {movieGif}></iframe>
            </div>
        </div>
    )
        ;
}

export default Modal;
