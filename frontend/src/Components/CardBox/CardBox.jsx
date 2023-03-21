import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'


function CardBox({ props }) {
  let navigate=useNavigate()
  let handleSinglePage=()=>{
      navigate("/singlepage",{state:props})
  }
  return (
    <Box boxShadow={"md"} borderRadius={10} pb={2}>
      <Box borderTopLeftRadius={10} borderTopRightRadius={10}  >
        <Image borderTopLeftRadius={10} borderTopRightRadius={10} m={"auto"} src={props.image} />
      </Box>
      <Box >
        <Text>
          Car: {props.title}
        </Text>
        <Text>
          Seats:  {props.seats}
        </Text>
        <Text>
          price: {props.price}Rs/km
        </Text>
      </Box>
      <Box display={"flex"} alignItems={"center"} justifyContent={"space-evenly"}>
        {/* <Button pl={7} pr={7} variant={"solid"} colorScheme={"red"}>Cancel</Button> */}

        <Button variant={"solid"} colorScheme={"facebook"}onClick={()=>handleSinglePage(props)}>Book Now</Button>
      </Box>
    </Box>
  )
}

export default CardBox