import React from 'react';
import { Route, Routes } from "react-router-dom";
import Login from '../pages/login';
import Register from '../pages/register';
import Home from '../pages/home';
import ErrorPage from '../pages/error-page';
import AddCard from '../pages/add-card';
import UpdateCard from "../pages/update-card";

function route() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/add-card' element={<AddCard />} />
      <Route path='/update-card' element={<UpdateCard />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
}

export default route;