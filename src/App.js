import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePg from './screens/HomePg';
import CartsPg from './screens/CartsPg';


function App() {

  


  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePg />} />
          <Route path="/cart" element={<CartsPg />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
