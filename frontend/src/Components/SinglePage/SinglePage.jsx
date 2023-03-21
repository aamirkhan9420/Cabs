import { Badge, Box, Button, Highlight, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ShowDescription } from '../ShowDescription/ShowDescription'
import RatingChanged from '../StarRating/StarRating'

function SinglePage() {
    let { state } = useLocation()
    let navigate = useNavigate()
    let handleAdressPage = () => {
        navigate("/address",{state})
    }
    return (
        <Box w={"100%"} p={2}>
            <Box m={"auto"} h={"fit-content"}
                w={{ base: "100%", sm: "100%", md: "95%", lg: "80%", xl: "80%" }}
                p={{ base: 0, sm: 3, md: 5, lg: 5, xl: 5 }}
                boxShadow={"md"}
            >
                <Box w={"100%"} h={{ base: 200, sm: 350, md: 400, lg: 500, xl: 550 }} >
                    <Image w={"100%"} h={"100%"} src={state.image} p={{ base: 0, sm: 3, md: 5, lg: 5, xl: 5 }} />
                </Box>
                <Box>
                    <Box display={"flex"} flexDir={"column"} alignItems={"flex-start"}
                        p={{ base: 2, sm: 3, md: 5, lg: 5, xl: 5 }}
                        gap={2}
                    >
                        <Text display={"flex"}>
                            {state.title}
                            <Badge display={"flex"} w={"fit-content"} alignItems={"center"} justifyContent={'center'} gap={2} ml={2} variant='solid' colorScheme='green'>
                                {state.rating}
                                <RatingChanged props={state.rating} />
                            </Badge>
                        </Text>
                        <Text>{state.seats} Seats</Text>
                        <Text color={"black"} fontWeight={700}>{state.price}Rs/km</Text>
                        <Text textAlign={"left"} >
                            <Highlight
                                query='Note:-'
                                styles={{ px: '2', rounded: 'full', bg: 'blue.700', color: "white" }}
                            >
                                Note:- Charges will be applied depending on Number of kilo-meters passenger has travelled eg. if passenger travelled 10km then 20Rs per kilo-meter will
                                be charged means total charge will be 200Rs for 10km.
                            </Highlight>
                        </Text>
                        <ShowDescription />
                    </Box>
                    <Box p={{ base: 2, sm: 3, md: 5, lg: 5, xl: 5 }}>
                        <Button variant={"solid"}
                            w='100%' colorScheme={"facebook"}
                            fontSize={{ base: 16, sm: 20, md: 20, lg: 25, xl: 25 }}
                            pb={{ base: 2, sm: 10, md: 10, lg: 10, xl: 10 }}
                            pt={{ base: 2, sm: 10, md: 10, lg: 10, xl: 10 }}
                            onClick={ handleAdressPage}
                        >Book Now</Button>
                    </Box>
                </Box>

            </Box>



        </Box>
    )
}

export default SinglePage