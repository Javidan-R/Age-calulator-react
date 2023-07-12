import React, { useState } from 'react';
import AgeCalculatorForm from './components/AgeCalculatorForm.jsx';
import AgeResult from './components/AgeResult.jsx';
import './App.css';

// Rest of the code remains the same



const App = () => {
  const [age, setAge] = useState(null);

  const calculateAge = (dateOfBirth) => {
    const today = new Date();
    const diffTime = Math.abs(today - dateOfBirth);
    const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25));
    const diffMonths = Math.floor(
      (diffTime % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * (365.25 / 12))
    );
    const diffDays = Math.floor(
      (diffTime % (1000 * 60 * 60 * 24 * (365.25 / 12))) / (1000 * 60 * 60 * 24)
    );
    setAge({ years: diffYears, months: diffMonths, days: diffDays });
  };

  return (
    <div className="container">
      <h1 className="title">Age Calculator</h1>
      <AgeCalculatorForm onCalculate={calculateAge} />
      {age && <AgeResult age={age} />}
    </div>
  );
};

export default App;
