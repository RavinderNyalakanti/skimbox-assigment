import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Basic from './components/Basic/Basic';
import Home from './components/Home/Home';
import Shopify from './components/Shopify/Shopify'; 
import Advanced from './components/Advanced/Advanced'
// import Home from './components/Home/Home';
// import Navbar from './components/Navbar/Navbar'
function App() {
  return (
    <div className="App">
      <Router>  
     
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/basic' element={<Basic/>}/>
        <Route path='/shopify' element={<Shopify/>}/>
        <Route path='/advanced' element={<Advanced/>}/>
      
       
      </Routes>
      </Router>
    </div>
  );
}

export default App;
