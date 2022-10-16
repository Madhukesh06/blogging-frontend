import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from '../components/Home/HomePage'
import Navbar from '../components/Navbar/Navbar'

const Allroutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Navbar/>} />
      <Route path="/home" element={<HomePage/>} />
    </Routes>
  )
}

export default Allroutes
