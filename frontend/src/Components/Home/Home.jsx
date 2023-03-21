import { Box } from '@chakra-ui/react'
import React from 'react'
import CarouselBox from '../Carousel/Carousel'
import GridComponent from '../Grid/GridComponent'

function Home() {
  return (
    <Box p={10}>
      <CarouselBox />
      <GridComponent />
    </Box>
  )
}

export default Home