import { Badge, Box, Button, Highlight, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import {  useNavigate } from 'react-router-dom'
import { deleteBookingf, getBookings } from '../../Store/GetBookingSlice'
import { ShowDescription } from '../ShowDescription/ShowDescription'
import RatingChanged from '../StarRating/StarRating'

function Booking() {
    //----- for warning modal----------//
    let [newcharge, setNewCharge] = useState("")
    let [newTime, setNewTime] = useState("")
    let [oldcharge, setOldCharge] = useState("")
    let [percent, setPercent] = useState("")
    let { isOpen, onClose, onOpen } = useDisclosure()
    let dispatch = useDispatch()
    let booking = useSelector((state) => {
        return state.getBooking?.data
    })

    let t1 = booking[0]?.t1
    let handleModal = () => {

        let t2 = new Date().getMinutes() - t1
        setNewTime(t2)
        let charges = booking[0]?.charges
        setOldCharge(charges)
        if (t2 < 0) {
            setNewCharge(charges)
            setPercent("100%")
            setNewTime("more than 4")
        }
        else if (t2 ===0) {
            setNewCharge(0)
            setPercent("0%")
        }
        else if (t2 >= 1 && t2 < 2 && t2 < 3 && t2 < 4) {
            setNewCharge(10 / 100 * charges)
            setPercent("10%")
        }
        else if (t2 >= 2 && t2 < 3 && t2 < 4) {
            setNewCharge(15 / 100 * charges)
            setPercent("15%")
        }
        else if (t2 >= 3 && t2 < 4) {
            setNewCharge(20 / 100 * charges)
            setPercent("20%")
        }
        else if (t2 >= 4) {
            setNewCharge(charges)
            setPercent("100%")
        }
        onOpen()
    }
    let navigate = useNavigate()
    let handledelete = () => {
        let { id } = booking.find(({ userId }) => userId === "aamir123")
        dispatch(deleteBookingf(id))
        onClose()
        navigate("/")
    }
    //----- for warning modal End----------//  

    useEffect(() => {

        dispatch(getBookings())
    
    }, [dispatch])

    return (
        <Box w={"100%"} p={2}>
            <Box m={"auto"} h={"fit-content"}
                w={{ base: "100%", sm: "100%", md: "95%", lg: "80%", xl: "80%" }}
                p={{ base: 0, sm: 3, md: 5, lg: 5, xl: 5 }}
                boxShadow={"md"}
            >
                <Box w={"100%"} h={{ base: 200, sm: 350, md: 400, lg: 500, xl: 550 }} >
                    <Image w={"100%"} h={"100%"} src={booking[0]?.cab.image} p={{ base: 0, sm: 3, md: 5, lg: 5, xl: 5 }} />
                </Box>
                <Box>
                    <Box display={"flex"} flexDir={"column"} alignItems={"flex-start"}
                        p={{ base: 2, sm: 3, md: 5, lg: 5, xl: 5 }}
                        gap={2}
                    >
                        <Text display={"flex"}>
                            {booking[0]?.cab.title}
                            <Badge display={"flex"} w={"fit-content"} alignItems={"center"} justifyContent={'center'} gap={2} ml={2} variant='solid' colorScheme='green'>
                                {booking[0]?.cab.rating}
                                <RatingChanged props={booking[0]?.cab.rating} />
                            </Badge>
                        </Text>
                        <Text>{booking[0]?.cab.seats} Seats</Text>
                        <Text color={"black"} fontWeight={700}>{booking[0]?.cab.price}Rs/km</Text>
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
                        <Button
                            variant={"solid"} colorScheme={"red"}
                            fontSize={{ base: 14, sm: 16, md: 20, lg: 20, xl: 20 }}
                            pb={{ base: 2, sm: 2, md: 3, lg: 4, xl: 8 }}
                            pt={{ base: 2, sm: 2, md: 3, lg: 4, xl: 8 }}
                            w={{ base: "100%", sm: "100%", md: "50%", lg: "30%", xl: "30%" }}
                            onClick={handleModal}
                        >Cancel</Button>
                    </Box>
                </Box>

            </Box>

            {/* Modal  for warning*/}

            <Modal
                closeOnOverlayClick={false}
                isOpen={isOpen}
                onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader color={"red"}>Warning!!</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>You are cancelling the booking after <span>{newTime} </span>minutes of booking time there for <span> {percent} </span>of total charge ie. <span>Rs {oldcharge}</span> will be applied ie. <span>Rs {newcharge}</span>  </Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={() => handledelete()} >
                            Proceed
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </Box>
    )
}

export default Booking


