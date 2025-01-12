import React from "react";
import "./result-popup.css";

export default function ShowResult({ isModalOpen, name, finalResult, UserBMI, onClose, ShowValidationPopup, showValidationMessage}) {
    if (!isModalOpen) return null; 

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                {ShowValidationPopup ? (
                    <h3>{showValidationMessage}</h3>
                ) : (
                    <>
                        <h3>Hi {name}, Your BMI is: {finalResult}</h3>
                        <h3>You are: {UserBMI}</h3>
                    </>
                )}
                <button onClick={onClose}>OK</button>
            </div>
        </div>
    );
}
