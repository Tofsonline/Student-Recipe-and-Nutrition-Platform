import React, { useState } from 'react';

const Calculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState(null);

  const calculateCalories = (e) => {
    e.preventDefault();
    let bmr = (10 * weight) + (6.25 * height) - (5 * age);
    bmr = gender === 'male' ? bmr + 5 : bmr - 161;
    setResult(Math.round(bmr * 1.2));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Daily Calorie Calculator</h2>
      <div className="card p-4 shadow-sm mx-auto calc-card" style={{maxWidth: '500px'}}>
        <form onSubmit={calculateCalories}>
          <div className="mb-3">
            <label className="form-label">Gender</label>
            <select className="form-select" onChange={(e) => setGender(e.target.value)}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Weight (kg)</label>
            <input type="number" className="form-control" onChange={(e) => setWeight(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Height (cm)</label>
            <input type="number" className="form-control" onChange={(e) => setHeight(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Age</label>
            <input type="number" className="form-control" onChange={(e) => setAge(e.target.value)} required />
          </div>
          <button type="submit" className="btn-primary-custom w-100">Calculate BMR</button>
        </form>
{result && (
    <div className="alert result-alert mt-4">
      Your estimated daily maintenance calories: <strong>{result} kcal</strong>
    </div>
  )}
</div>
    </div>
  );
};

export default Calculator;