import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'

function CardBox() {
  return (
    <Box   boxShadow={"md"} borderRadius={10} pb={2}>
        <Box  borderTopLeftRadius={10} borderTopRightRadius={10}  >
            <Image borderTopLeftRadius={10} borderTopRightRadius={10} m={"auto"} src='https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />
        </Box>
        <Box >
           <Text>
            Car: Swift
           </Text>
           <Text>
          Seats:  Four Seater
           </Text>
           <Text>
            price: 10Rs/km
           </Text>
        </Box>
        <Box >
           <Button  bgColor={"#CD5D67"} color={"white"}>Book Now</Button>
        </Box>
    </Box>
  )
}

export default CardBox