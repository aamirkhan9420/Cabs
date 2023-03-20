import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Logo() {
  return (
    <Box w={{ base: "25%", sm: "18%", md: "15%", lg: "12%", xl: "10%", xxl: "10%" }} h={{ base: "75%", sm: "70%", md: "80%", lg: "80%", xl: "80%" }}>
        <Link to={"/"}>
          <Image w={"100%"} h={"100%"} src='./cabLogo.png' />
        </Link>
      </Box>
  )
}

export default Logo