import React from 'react';
import {Routes,Route, Navigate} from "react-router-dom";
import Home from '../pages/Home'
import About from '../pages/About'
import CarList from '../pages/CarList'
import CarDetails from '../pages/CarDetails';
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home'/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/carlist' element={<CarList/>}/>
      <Route path='/cars/:slug' element={<CarDetails/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default Routers