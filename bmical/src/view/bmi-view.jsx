import {React, useState} from "react";

import './bmi-view-css.css'

export default function BMICalculator() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeigth] = useState('');
  const [gender, setGender] = useState('');
  const [isShowBMIResult, setisShowBMIResult] = useState(false);
  const [finalResult, setfinalResult] = useState(null);

  const validateUserDecimalInput = (event) => {
    event.target.value = event.target.value.replace(/[^0-9]/g, "");
  };

  const validateUserTextInput = (event) => {
    event.target.value = event.target.value.replace(/[^a-zA-Z\s]/g, "");
  };
  
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeigth(event.target.value);
  };

  const handleRadioButtonChange = (value) => {
    setGender(value);
  };

  const calculateBodyMassIndex = () => {
    if (weight <= 0 || height <= 0) {
      return "Invalid input. Please enter valid weight and height values.";
    }

    const value =( weight / ((height * height)/10000)).toFixed(2);
    setfinalResult(value);
    if (value) {
      setisShowBMIResult(true);
    }
  };
 
  
  const resetAll = ()=>{
    setName("");
    setAge("");
    setHeight("");
    setWeigth("");
  }

  return (
  <>
    <h3>BMI Calculator</h3>
    <div className="main-wrapper__outer bmi-widget">
      <div className="main-wrapper__inner">
        <div className="main-view-conatiner">

        <h4>Enter Your Name</h4>
        <input  type="text"
                min={0} 
                max={150} 
                className="user-input"
                value={name}
                onChange={handleNameChange}
                onInput={validateUserTextInput} />

        <h4>Enter Your Age</h4>
        <input  type="text"
                min={0} 
                max={150} 
                className="user-input"
                value={age}
                onChange={handleAgeChange}
                onInput={validateUserDecimalInput} />
      
        <h4>Enter Your Height (Cm)</h4>
        <input  type="text" 
                min={0} 
                value={height}
                className="user-input"
                onChange={handleHeightChange}
                onInput={validateUserDecimalInput} />

        <h4>Enter Your Weight (Kg)</h4>
        <input  type="text" 
                min={0} 
                value={weight}
                className="user-input" 
                onChange={handleWeightChange}
                onInput={validateUserDecimalInput} />

        <h4>Select Gender</h4>
        <div className="gender-btn-wrapper">
            <input 
              type="radio" 
              id="Male" 
              name="gender"               
              value="male" 
              onChange={()=>handleRadioButtonChange('male')}
            />
            <label htmlFor="Male">Male</label>

            <input 
              type="radio" 
              id="Female" 
              name="gender" 
              value="female" 
              onChange={()=>handleRadioButtonChange('female')}
            />
            <label htmlFor="Female">Female</label>
     
            <input 
              type="radio" 
              id="Other" 
              name="gender" 
              value="other" 
              onChange={()=>handleRadioButtonChange('other')}                
            />
            <label htmlFor="Other">Other</label>
       
        </div>
        <div className="control-btn-wrapper">
          <button id="calculate" className="btn" onClick={calculateBodyMassIndex}>Check</button>
          <button id="reset" className="btn" onClick={resetAll}>Reset</button>
        </div>
       
        {isShowBMIResult &&
          <h3>Hi {name}, Your BMI is  {finalResult}</h3>
        }
        </div>
      </div>
    </div>
  </>
  )
}

