import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component//Home/Home';
import About from './component/About/About';
import Navbar from './component/Navbar';
import Counter from './component/Counter/Counter';

function App() {
  

  return (
    <>
<Router>
    <Navbar/>

    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path='/counter' element={<Counter/>}/>
    </Routes>
    </Router>
    </>
  )
}

export default App
