import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LinkedinShareButton,
  TwitterShareButton,
  LinkedinIcon,
  TwitterIcon,
} from 'react-share';
import ProgressIndicator from '../../components/ProgressIndicator/ProgressIndicator';
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle';
import './AvatarCustomization.css';

const AvatarCustomization = () => {
  const navigate = useNavigate();
  const [isGenerating, setIsGenerating] = useState(false);
  const [customization, setCustomization] = useState({
    gender: 'male',
    hairColor: 'brown',
    hairLength: 'short',
    eyeColor: 'blue',
    glasses: 'no',
    favoriteColor: 'blue',
  });

  const handleCustomizationChange = (e) => {
    setCustomization({
      ...customization,
      [e.target.name]: e.target.value,
    });
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate avatar generation with a timeout
    setTimeout(() => {
      setIsGenerating(false);
      // Redirect to thank you page after generation
      navigate('/thank-you');
    }, 10000);
  };

  const shareUrl = window.location.href;
  const shareTitle = 'Check out my robot avatar! #myrobotavatar';

  return (
    <div className="customization-container">
      <ThemeToggle />
      <h1 className="customization-title">Customize Your Avatar</h1>
      <div className="avatar-container">
        <img 
          src="src/assets/avatar.jpg" 
          alt="Generated Avatar" 
          className="avatar-image"
        />
      </div>

      <div className="options-container">
        <select
          className="customization-select"
          name="gender"
          value={customization.gender}
          onChange={handleCustomizationChange}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <select
          className="customization-select"
          name="hairColor"
          value={customization.hairColor}
          onChange={handleCustomizationChange}
        >
          <option value="black">Black</option>
          <option value="brown">Brown</option>
          <option value="blonde">Blonde</option>
          <option value="red">Red</option>
        </select>

        <select
          className="customization-select"
          name="hairLength"
          value={customization.hairLength}
          onChange={handleCustomizationChange}
        >
          <option value="short">Short</option>
          <option value="medium">Medium</option>
          <option value="long">Long</option>
        </select>

        <select
          className="customization-select"
          name="eyeColor"
          value={customization.eyeColor}
          onChange={handleCustomizationChange}
        >
          <option value="blue">Blue</option>
          <option value="brown">Brown</option>
          <option value="green">Green</option>
        </select>

        <select
          className="customization-select"
          name="glasses"
          value={customization.glasses}
          onChange={handleCustomizationChange}
        >
          <option value="yes">With Glasses</option>
          <option value="no">Without Glasses</option>
        </select>

        <select
          className="customization-select"
          name="favoriteColor"
          value={customization.favoriteColor}
          onChange={handleCustomizationChange}
        >
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="purple">Purple</option>
        </select>

        {!isGenerating ? (
          <button 
            className="update-button"
            onClick={handleGenerate}
          >
            Generate Final Avatar
          </button>
        ) : (
          <ProgressIndicator />
        )}
      </div>

      <div className="share-container">
        <LinkedinShareButton url={shareUrl} title={shareTitle}>
          <LinkedinIcon size={32} round className="share-button" />
        </LinkedinShareButton>
        <TwitterShareButton url={shareUrl} title={shareTitle}>
          <TwitterIcon size={32} round className="share-button" />
        </TwitterShareButton>
      </div>
    </div>
  );
};

export default AvatarCustomization;
