import React from 'react';
import './FormInput.css';

const FormInput = ({ label, type, name, value, onChange, required }) => {
  return (
    <div className="input-container">
      <label className="input-label" htmlFor={name}>{label}</label>
      <input
        className="input-field"
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default FormInput;
