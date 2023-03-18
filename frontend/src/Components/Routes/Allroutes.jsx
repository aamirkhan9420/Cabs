import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Booking from '../Booking/Booking'
import Home from '../Home/Home'
import Profile from '../Profile/Profile'

function Allroutes() {
  return (
   <Routes>

    <Route path='/' element={<Home />}/>
    <Route path='/booking' element={<Booking />}/>
    <Route path='/profile' element={<Profile />}/>

   </Routes>
  )
}

export default Allroutes