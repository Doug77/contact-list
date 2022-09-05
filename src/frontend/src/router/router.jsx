import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import Main from '../pages/components/main/main';
import Login from '../pages/login/Login';
import Contacts from '../pages/contacts/Contacts';
import Register from '../pages/register/Register';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contacts" element={<Main main={<Contacts />} />} />
    </Routes>
  );
}
