import React from 'react'
import Home from './pages/home'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

const RoutesPage = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path='*' element={<Navigate to='/' />}/>
        
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesPage