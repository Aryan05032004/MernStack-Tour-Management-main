import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import SearchResultList from '../pages/SearchResultList';
import Tours from '../pages/Tours';
import Login from '../pages/Login';
import TourDetails from '../pages/TourDetails';
import Register from '../pages/Register';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/tour" element={<Tours />} />
      <Route path="/tour/:id" element={<TourDetails />} /> {/* Note the colon before 'id' */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/tour/search" element={<SearchResultList />} />
    </Routes>
  );
};

export default Routers;
