import React from 'react';
import { Route, Routes } from "react-router-dom";
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
import Landing from '../pages/Landing';
import Login from '../components/landing/Login/Login';
import HomePage from '../pages/HomePage/HomePage'

function AppRoutes() {
  return (
    <Routes>
      {/* Rutas públicas, siempre accesibles */}
      <Route path='/' element={<Landing />} />
      <Route path="/login" element={<Login />} />
    
    
     {/* Rutas privadas */}
     <Route
        path="/homePage"
        element={
          <PrivateRoutes requiredRole="1">
            <HomePage />
          </PrivateRoutes>
        }
      />
      
    </Routes>
  );
}

export default AppRoutes;
