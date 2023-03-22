import { Badge, Box, Button, Image, position, Text, useToast } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import RatingChanged from '../StarRating/StarRating'


function CardBox({ props,isdisable}) {
  let navigate = useNavigate()
  let booking = useSelector((state) => {
    return state.getBooking.data
  }) 
  let toast=useToast()
 

  let handleSinglePage = () => {
    let x=  booking.find(({userId})=>userId==="aamir123")
    if(x===undefined){
          navigate("/singlepage", { state: props})
    }else{
       toast({
           title:"You have Booked already an cab please cancel first cab booking then try for another cab ",
           position:"top",
           duration:9000,
           isClosable:true,
           status:"warning"
       })
    }

  }
  return (
    <Box boxShadow={"md"} borderRadius={10} pb={2}>
      <Box borderTopLeftRadius={10} borderTopRightRadius={10}  >
        <Image borderTopLeftRadius={10} borderTopRightRadius={10} m={"auto"} src={props.image} />
      </Box>
      <Box textAlign={"left"} pl={2} pt={2}>
        <Text display={"flex"}>
          {props.title}
          <Badge display={"flex"} w={"fit-content"} alignItems={"center"} justifyContent={'center'} gap={2} ml={2} variant='solid' colorScheme='green'>
        {props.rating}
        <RatingChanged props={props.rating} />
      </Badge>
        </Text>
        <Text>
          {props.seats} Seats
        </Text>
        <Text color={"black"} fontWeight={700}>
          {props.price}Rs/km
        </Text>
      </Box>
      
      <Box p={2} gap={2} display={"flex"} flexDir={{base:"column",sm:"column",md:"row",lg:"row",xl:"row"}} alignItems={"left"} justifyContent={"space-evenly"}>
        { isdisable===props.id&& <Button pl={7} pr={7} variant={"solid"} colorScheme={"red"}>Cancel</Button>}

        <Button variant={"solid"} isDisabled={isdisable===props.id} colorScheme={"facebook"} onClick={() => handleSinglePage(props)}>Book Now</Button>
      </Box>
      
    </Box>
  )
}

export default CardBox