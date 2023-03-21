import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Booking from '../Booking/Booking'
import Home from '../Home/Home'
import Profile from '../Profile/Profile'
import SinglePage from '../SinglePage/SinglePage'

function Allroutes() {
  return (
    <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/booking' element={<Booking />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/singlepage' element={<SinglePage />} />

    </Routes>
  )
}

export default Allroutes