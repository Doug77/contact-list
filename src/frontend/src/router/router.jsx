import { Navigate, Route, Routes } from 'react-router-dom';

import Login from '../pages/login/Login';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/login" /> } />
      <Route path="/login" element={ <Login /> } />
    </Routes>
  )
}
