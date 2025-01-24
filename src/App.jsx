import React from 'react';

import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import MyProjects from './Components/MyProjects/MyProjects';
import Contact from './Components/Contact/Contact';
import './App.css'

const App = () => {
  return (
    <div>
    <Navbar/>
    <Home/>
    <About/>
    <Services/>
    <MyProjects/>
    <Contact/>

    </div>
  );
}

export default App;
