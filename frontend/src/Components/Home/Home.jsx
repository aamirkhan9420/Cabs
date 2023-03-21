import { Box } from '@chakra-ui/react'
import React from 'react'
import CarouselBox from '../Carousel/Carousel'
import GridComponent from '../Grid/GridComponent'

function Home() {
  return (
   <Box  p={{base:6 ,sm:8, md:10, lg:10, xl:10}}>
    <CarouselBox />
    <GridComponent />
   </Box>
  )
}

export default Home