import React from 'react';
import { useNavigate } from 'react-router-dom';
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle';
import './Welcome.css';
import logo from '../../assets/integrella-logo.svg';

const Welcome = () => {
  const navigate = useNavigate();

  const handleBegin = () => {
    navigate('/user-form');
  };

  return (
    <div className="welcome-page">
      <div className="welcome-container">
        <div className="theme-toggle-container">
          <ThemeToggle />
        </div>
        <div className="welcome-content">
          <img src={logo} alt="Company Logo" className="welcome-logo" />
          
          <h1 className="welcome-title">Welcome to Avatar Generator</h1>
          
          <div className="welcome-instructions">
            <p className="welcome-subtitle">Create your personalized robot avatar in just a few steps!</p>
            
            <div className="instruction-list">
              <div className="instruction-item">
                <span className="instruction-number">1</span>
                <p>Fill in your basic information in our simple form</p>
              </div>
              <div className="instruction-item">
                <span className="instruction-number">2</span>
                <p>Choose your preferred avatar style and colors</p>
              </div>
              <div className="instruction-item">
                <span className="instruction-number">3</span>
                <p>Customize your robot's features and accessories</p>
              </div>
              <div className="instruction-item">
                <span className="instruction-number">4</span>
                <p>Download your unique avatar and share it with others</p>
              </div>
            </div>
          </div>

          <button onClick={handleBegin} className="begin-button">
            Let's Begin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
