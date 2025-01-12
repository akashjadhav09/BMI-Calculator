import React, { useState } from "react";
import "./bmi-view-css.css";
import ShowResult from "../result-view/result-popup";

export default function BMICalculator() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    height: '',
    weight: '',
    gender: ''
  });

  const [isShowBMIResult, setIsShowBMIResult] = useState(false);
  const [finalResult, setFinalResult] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const validatedValue = name === 'name'
      ? value.replace(/[^a-zA-Z\s]/g, "")   // Allow only text for name
      : value.replace(/[^0-9]/g, "");       // Allow only numbers for others

    setFormData({ ...formData, [name]: validatedValue });
  };


  const handleGenderChange = (value) => {
    setFormData({ ...formData, gender: value });
  };


  const calculateBodyMassIndex = () => {
    const { weight, height } = formData;
    const numericWeight = parseFloat(weight);
    const numericHeight = parseFloat(height);

    if (numericWeight <= 0 || numericHeight <= 0) {
      alert("Invalid input. Please enter valid weight and height values.");
      return;
    }

    const bmi = (numericWeight / ((numericHeight * numericHeight) / 10000)).toFixed(2);
    setFinalResult(bmi);
    setIsShowBMIResult(true);
    console.log("isShowBMIResult ", isShowBMIResult)
  };


  const resetAll = () => {
    setFormData({
      name: '',
      age: '',
      height: '',
      weight: '',
      gender: ''
    });
    setIsShowBMIResult(false);
    setFinalResult(null);
  };

  return (
    <>
      <h3>BMI Calculator</h3>
      <div className="main-wrapper__outer bmi-widget">
        <div className="main-wrapper__inner">
          <div className="main-view-container">

            {['Name', 'Age', 'Height (Cm)', 'Weight (Kg)'].map((label, index) => {
              const key = label.toLowerCase().split(' ')[0];
              return (
                <div key={index}>
                  <h4>Enter Your {label}</h4>
                  <input
                    type="text"
                    min={0}
                    name={key}
                    value={formData[key]}
                    className="user-input"
                    onChange={handleInputChange}
                  />
                </div>
              );
            })}

            <h4>Select Gender</h4>
            <div className="gender-btn-wrapper">
              {['male', 'female', 'other'].map((gender, index) => (
                <div key={index}>
                  <input
                    type="radio"
                    id={gender}
                    name="gender"
                    value={gender}
                    checked={formData.gender === gender}
                    onChange={() => handleGenderChange(gender)}
                  />
                  <label htmlFor={gender}>{gender.charAt(0).toUpperCase() + gender.slice(1)}</label>
                </div>
              ))}
            </div>

            <div className="control-btn-wrapper">
              <button id="calculate" className="btn" onClick={calculateBodyMassIndex}>Check</button>
              <button id="reset" className="btn" onClick={resetAll}>Reset</button>
            </div>

            {isShowBMIResult && (
              <ShowResult 
              name={formData.name} 
              finalResult={finalResult} 
              isModalOpen={isShowBMIResult} 
              onClose={() => setIsShowBMIResult(false)}/>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
