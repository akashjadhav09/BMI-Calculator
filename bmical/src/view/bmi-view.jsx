import React, { useState } from "react";

import "./bmi-view-css.css";
import ShowResult from "../result-view/result-popup";
import { useTranslation } from "react-i18next"; 

export default function BMICalculator() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    height: '',
    weight: '',
    gender: ''
  });
  const [finalResult, setFinalResult] = useState(null);
  const [UserBMI, setUserBMI] = useState('');
  const [isShowBMIResult, setIsShowBMIResult] = useState(false);
  const [isShowValidationPopup, setIsShowValidationPopup] = useState(false);
  const { t } = useTranslation();


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const validatedValue = name === 'name'
      ? value.replace(/[^a-zA-Z\s]/g, "")
      : value.replace(/[^0-9]/g, "");

    setFormData({ ...formData, [name]: validatedValue });
  };

  const handleGenderChange = (value) => {
    setFormData({ ...formData, gender: value });
  };

  const calculateBodyMassIndex = () => {
    const { name, age, height, weight, gender } = formData;

    if (!name || !age || !height || !weight || !gender) {
      setIsShowValidationPopup(true);
      setIsShowBMIResult(false);
      return;
    }

    const numericWeight = parseFloat(weight);
    const numericHeight = parseFloat(height);

    if (numericWeight <= 0 || numericHeight <= 0) {
      alert("Invalid input. Please enter valid weight and height values.");
      return;
    }

    const bmi = (numericWeight / ((numericHeight * numericHeight) / 10000)).toFixed(2);
    setFinalResult(bmi);
    calculateHealthCategory(bmi);
    setIsShowBMIResult(true);
    setIsShowValidationPopup(false);
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
    setIsShowValidationPopup(false);
    setFinalResult(null);
  };

  const calculateHealthCategory = (UserBMI) => {
    if (UserBMI < 18) {
      setUserBMI('Underweight');
    } else if (UserBMI > 25) {
      setUserBMI('Overweight');
    } else {
      setUserBMI('Normal');
    }
  };


  return (
    <>
      <h2>{t('welcome')}</h2>
      {/* <h3>BMI Calculator</h3> */}
      <div className="main-wrapper__outer bmi-widget">
        <div className="main-wrapper__inner">
          <div className="main-view-container">

            {['Name', 'Age', 'Height (Cm)', 'Weight (Kg)'].map((label, index) => {
              const key = label.toLowerCase().split(' ')[0];
              return (
                <div key={index}>
                  <h4>{t('enterYour', { label: t(key) })}</h4>
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

            <h4>{t('selectGender')}</h4>
            <div className="gender-btn-wrapper">
              {['male', 'female', 'other'].map((gender, index) => (
                <div key={index} className="gender-inner">
                  <input
                    type="radio"
                    id={gender}
                    name="gender"
                    value={gender}
                    checked={formData.gender === gender}
                    onChange={() => handleGenderChange(gender)}
                  />
                  <label htmlFor={gender}>{t(gender)}</label>
                </div>
              ))}
            </div>

            <div className="control-btn-wrapper">
              <button id="calculate" className="btn" onClick={calculateBodyMassIndex}>{t('calculate')}</button>
              <button id="reset" className="btn" onClick={resetAll}>{t('reset')}</button>
            </div>

            {isShowBMIResult && (
              <ShowResult
                name={formData.name}
                finalResult={finalResult}
                isModalOpen={isShowBMIResult}
                UserBMI={UserBMI}
                onClose={() => setIsShowBMIResult(false)}
              />
            )}

            {isShowValidationPopup && (
              <ShowResult
                showValidationMessage={'Please fill out all fields correctly.'}
                isModalOpen={isShowValidationPopup}
                ShowValidationPopup={isShowBMIResult ? !isShowBMIResult : isShowValidationPopup}
                onClose={() => setIsShowValidationPopup(false)}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
