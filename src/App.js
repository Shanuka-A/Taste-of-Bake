import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePg from './screens/HomePg';
import CartsPg from './screens/CartsPg';
import RegisterPg from './screens/RegisterPg';
import LoginPg from './screens/LoginPg';
import AboutUs from './screens/AboutUs';
import Footer from './Components/Footer';
import HomePage from './screens/HomePage';



function App() {

  


  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePg />} />
          <Route path="/cart" element={<CartsPg />} />
          <Route path='/register'element={<RegisterPg/>}/>
          <Route path='/login'element={<LoginPg/>}/>
          <Route path='/aboutus'element={<AboutUs/>}/>
          <Route path='/home' element={<HomePage/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
