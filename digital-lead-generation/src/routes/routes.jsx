import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import UserForm from '../pages/UserForm/UserForm';
import AvatarCreation from '../pages/AvatarCreation/AvatarCreation';
import AvatarCustomization from '../pages/AvatarCustomization/AvatarCustomization';
import ThankYou from '../pages/ThankYou/ThankYou';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <UserForm />
  },
  {
    path: '/create-avatar',
    element: <AvatarCreation />
  },
  {
    path: '/customize-avatar',
    element: <AvatarCustomization />
  },
  {
    path: '/thank-you',
    element: <ThankYou />
  }
]);
