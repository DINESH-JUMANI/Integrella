import React from 'react';
import {
  LinkedinShareButton,
  TwitterShareButton,
  LinkedinIcon,
  TwitterIcon,
} from 'react-share';
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle';
import './ThankYou.css';

const ThankYou = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'src/assets/avatar2.jpg';
    link.download = 'my-robot-avatar.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const shareUrl = window.location.href;
  const shareTitle = 'Check out my robot avatar! #myrobotavatar';

  return (
    <div className="thank-you-container">
      <ThemeToggle />
      <h1 className="thank-you-title">Thank You for Playing!</h1>
      <p className="thank-you-subtitle">Here's your personalized robot avatar</p>
      
      <div className="final-avatar-container">
        <img 
          src="src/assets/avatar.jpg" 
          alt="Your Robot Avatar" 
          className="final-avatar"
        />
      </div>

      <div className="action-buttons">
        <button className="action-button" onClick={handleDownload}>
          Download Avatar
        </button>
      </div>

      <div className="share-buttons">
        <LinkedinShareButton url={shareUrl} title={shareTitle}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <TwitterShareButton url={shareUrl} title={shareTitle}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      </div>
    </div>
  );
};

export default ThankYou;
