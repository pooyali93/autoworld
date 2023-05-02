import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from "./components/layouts/Layout.js";
import Home from './components/Frontend/pages/Home.js'
import About from './components/Frontend/pages/About.js'
import CarList from './components/Frontend/pages/CarList.js'
import CarDetails from './components/Frontend/pages/CarDetails.js';
import Contact from './components/Frontend/pages/Contact.js'
import NotFound from './components/Frontend/pages/NotFound.js'
import FavoritesList from './components/Frontend/pages/FavoritesList.js';
import Login from './components/Frontend/pages/Login.js';
import { AuthProvider } from './components/auth/useAuth.js';
import MyBookings from './components/Portal/pages/MyBookings.js';
import Vehicles from './components/Portal/pages/Vehicles.js';
import Users from './components/Portal/pages/Users.js';
import Feedbacks from './components/Portal/pages/Feedbacks.js';
import './App.css';
import Dashboard from './components/Frontend/pages/Dashboard.js';


export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
          <Route path='/' element={<Home />}> </Route>
            <Route path='/home' element={<Home />}> </Route>
            <Route path='/carlist' element={<CarList />}></Route>
            <Route path='/cars' element={<CarDetails />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/favorite' element={<FavoritesList />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/bookings' element={<MyBookings />}></Route>
            <Route path='/vehicles' element={<Vehicles />}></Route>
            <Route path='/users' element={<Users />}></Route>
            <Route path='/feedbacks' element={<Feedbacks />}></Route>
            <Route path='/dashboard' element={<Dashboard />}></Route>
            <Route path='/*' element={<NotFound />}></Route>
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}


