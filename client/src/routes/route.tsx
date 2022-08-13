import React from 'react';
import { Route, Routes } from "react-router-dom";
import Login from '../pages/users/login';
import Register from '../pages/users/register';
import Home from '../pages/home';
import ErrorPage from '../pages/error-page';
import AddCard from '../pages/cards/add-card';
import UpdateCard from "../pages/cards/update-card";

function Routing() {
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

export default Routing;