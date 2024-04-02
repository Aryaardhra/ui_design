import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Shop from './components/shop/Shop'
import Sale from './components/sale/Sale'
import Contact from './components/contact/Contact'
import Header from './components/header/Header'
import "./App.css";

const App = () => {
  return (
    <>
    <div className='App '>
      <div className='side'>
        
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route  path="/shop" element={<Shop />} />
        <Route  path="/sale" element={<Sale />} />
        <Route  path="/contact" element={<Contact/>} />
    </Routes>
    </div>
    </div>
    </>
  )
}

export default App
