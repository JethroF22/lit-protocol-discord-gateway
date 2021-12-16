import { Routes, Route } from 'react-router-dom';

import CreateGatedChannelPage from '../components/create/CreateGatedChannelPage';
import LandingPage from '../components/landingPage/LandingPage';
import LoginPage from '../components/auth/LoginPage';
import CreateEventPage from '../components/create/CreateEventPage';
import CreateCategoryPage from '../components/create/CreateCategoryPage';
import UserPage from '../components/user/UserPage';

export const Switch = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />}></Route>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="user" element={<UserPage />}></Route>
      <Route path="create">
        <Route path="event" element={<CreateEventPage />}></Route>
        <Route path="category" element={<CreateCategoryPage />}></Route>
      </Route>
    </Routes>
  );
};
