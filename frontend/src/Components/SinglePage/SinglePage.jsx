import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { ShowDescription } from '../ShowDescription/ShowDescription'

function SinglePage() {
    let { state } = useLocation()
    console.log(state)
    return (
        <Box w={"100%"} >
            <Box m={"auto"} w={"80%"} border={"1px solid red"} p={10}>
                <Box w={"100%"} h={"50%"}>
                    <Image w={"100%"} h={"100%"} src={state.image} />
                </Box>
                <Box>
                    <Box border={"1px solid green"} display={"flex"} flexDir={"column"} alignItems={"flex-start"} p={5}>
                        <Text>Name: {state.title}</Text>
                        <Text>Seats: {state.seats}</Text>
                        <Text>Price: {state.price}</Text>
                     
                    <ShowDescription />
                    </Box>
                    <Box>
                       <Button variant={"solid"} colorScheme={"facebook"}>Book Now</Button>
                    </Box>
                </Box>

            </Box>



        </Box>
    )
}

export default SinglePage