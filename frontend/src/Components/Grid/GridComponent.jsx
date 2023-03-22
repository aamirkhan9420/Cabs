import { Box, Grid } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import CardBox from '../CardBox/CardBox'

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getProduct } from '../../Store/ProductSlice'
import { getBookings } from '../../Store/GetBookingSlice'
function GridComponent() {
  let dispatch = useDispatch()
  let data = useSelector((state) => {
    return state.product.data
  })
  let booking = useSelector((state) => {
    return state.getBooking.data
  })

  useEffect(() => {
    if (data.length == 0) {
      dispatch(getProduct())
     
    }
 dispatch(getBookings())
  }, [])
  
  return (
    // {base:"",sm:"",md:"",lg:"",xl:""}
    <Box w={{ base: "100%", sm: "95%", md: "85%", lg: "85%", xl: "85%" }} m={"auto"}>
      <Grid templateColumns={{ base: "repeat(1,1fr)", sm: "repeat(2,1fr)", md: "repeat(2,1fr)", lg: "repeat(3,1fr)", xl: "repeat(3,1fr)" }} gap={3} >
        {data.length > 0 && data.map((el, index) => (
          <CardBox props={el} key={index} isdisable={booking[0]?.cab.id} />
        ))}


      </Grid>

    </Box>
  )
}

export default GridComponent