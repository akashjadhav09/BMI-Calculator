import React from "react";
import "./result-popup.css";

export default function ShowResult({ isModalOpen, name, finalResult, onClose }) {
    if (!isModalOpen) return null; 

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h3>Hi {name}, your BMI is: {finalResult}</h3>
                <button onClick={onClose}>OK</button>
            </div>
        </div>
    );
}
