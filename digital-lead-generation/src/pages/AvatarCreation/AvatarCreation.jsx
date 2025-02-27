import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Webcam from 'react-webcam';
import ProgressIndicator from '../../components/ProgressIndicator/ProgressIndicator';
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle';
import './AvatarCreation.css';

const AvatarCreation = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [showWebcam, setShowWebcam] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const fileInputRef = useRef();
  const webcamRef = useRef();

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleCapture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
    setShowWebcam(false);
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simulate avatar generation with a timeout
    setTimeout(() => {
      // In a real implementation, this would be replaced with an API call
      setIsGenerating(false);
      navigate('/customize-avatar');
    }, 10000);
  };

  return (
    <div className="avatar-creation-container">
      <ThemeToggle />
      <h1 className="avatar-creation-title">Create Your Avatar</h1>
      <div className="image-container">
        {showWebcam ? (
          <Webcam
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width="100%"
            height="100%"
          />
        ) : image ? (
          <img src={image} alt="Selected" className="selected-image" />
        ) : (
          <div className="no-image-text">
            No image selected
          </div>
        )}
      </div>

      {!isGenerating && (
        <div className="button-container">
          <button 
            className="avatar-button"
            onClick={() => showWebcam ? handleCapture() : setShowWebcam(true)}
          >
            {showWebcam ? 'Capture' : 'Take Picture'}
          </button>
          <button 
            className="avatar-button"
            onClick={() => fileInputRef.current.click()}
          >
            Choose from Gallery
          </button>
          {image && (
            <button 
              className="avatar-button"
              onClick={handleGenerate}
            >
              Generate Avatar
            </button>
          )}
        </div>
      )}

      {isGenerating && <ProgressIndicator />}

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelect}
        accept="image/*"
        className="file-input"
      />
    </div>
  );
};

export default AvatarCreation;
