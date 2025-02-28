import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './pages/Welcome/Welcome';
import UserForm from './pages/UserForm/UserForm';
import AvatarCreation from './pages/AvatarCreation/AvatarCreation';
import AvatarCustomization from './pages/AvatarCustomization/AvatarCustomization';
import ThankYou from './pages/ThankYou/ThankYou';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/user-form" element={<UserForm />} />
            <Route path="/avatar-creation" element={<AvatarCreation />} />
            <Route path="/avatar-customization" element={<AvatarCustomization />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
