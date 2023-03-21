import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddressPage from '../Address/Address'
import Booking from '../Booking/Booking'
import Home from '../Home/Home'
import Payment from '../PaymentPage/Payment'
import Profile from '../Profile/Profile'
import SinglePage from '../SinglePage/SinglePage'

function Allroutes() {
  return (
    <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/booking' element={<Booking />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/singlepage' element={<SinglePage />} />
      <Route path='/address' element={<AddressPage />} />
      <Route path='/payment' element={<Payment />} />




    </Routes>
  )
}

export default Allroutes