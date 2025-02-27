import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../../components/FormInput/FormInput';
import CircularProgress from '../../components/CircularProgress/CircularProgress';
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle';
import './UserForm.css';

const UserForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call with 5 second delay
    setTimeout(() => {
      setIsLoading(false);
      navigate('/create-avatar');
    }, 5000);
  };

  return (
    <div className="user-form-container">
      <ThemeToggle />
      <h1 className="user-form-title">Create Your Robot Avatar</h1>
      <form className="user-form" onSubmit={handleSubmit}>
        <FormInput
          label="Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Company"
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Role"
          type="text"
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
        />
        <button 
          type="submit" 
          className="submit-button"
          disabled={isLoading}
        >
          {isLoading ? (
            <CircularProgress size={20} />
          ) : (
            'Start Creating Avatar'
          )}
        </button>
      </form>
    </div>
  );
};

export default UserForm;
