import { Box, Button, Grid, Input, InputGroup, InputLeftAddon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Stack, Text, useDisclosure, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { makeBooking } from '../../Store/BookingSlice'

function AddressPage() {
    let [name, setName] = useState("aamir")
    let [number, setNumber] = useState(8830216297)
    let [currlocation, setCurrLocation] = useState("varangaon")
    let [destination, setDestination] = useState("bhusawal")
    let [distance, setdistance] = useState("")
    let [charges, setCharges] = useState("")
    let [seat, setSeats] = useState("3")
    const toast = useToast()
    let { isOpen, onOpen, onClose } = useDisclosure()
    let { state } = useLocation()
    let dispatch=useDispatch()
    let arr = ["Select number of seats", 1, 2, 3, 4, 5, 6, 7, 8]
    let handleModal = () => {
        if (name && number && currlocation && destination && seat) {
            if (Number(state.seats) >= seat) {
                let x=Math.floor((Math.random() * 20) + 1)
                console.log(x)
                setCharges(x * 20)
                setdistance(x)
                
                onOpen()
                
            } else {
                toast({
                    title: `Only ${state.seats} seats available`,
                    status: "error",
                    isClosable: true,
                    position: "top"
                })
            }
        } else {
            toast({
                title: `All fields required`,
                status: "error",
                isClosable: true,
                position: "top"
            })
        }
    }
    let handleForm = () => {
        let UserInformation = {
            name,
            number,
            currentLocation: currlocation,
            destination,
            seats: seat,
            distance,
            charges,
            cab:state,
            userId:"aamir123"//userId to check whether user already booked or not some other cabs
        }
        localStorage.setItem("userinformation", JSON.stringify(UserInformation))
        toast({
            title: `Address Saved Please Wait for Cab`,
            status: "success",
            isClosable: true,
            position: "top"
        })
        dispatch(makeBooking(UserInformation))
   onClose()
    }
    return (
        <Box w={"100%"} p={{ base: 2, sm: 10, md: 16, lg: 20, xl: 20 }}>
            <Box boxShadow={"md"} p={{ base: 4, sm: 6, md: 8, lg: 10, xl: 10 }}>
                <Box textAlign={"left"} pb={5}>
                    <Text>Passenger Details</Text>
                </Box>
                <Grid gap={5} templateColumns={{ base: "repeat(1,1fr)", sm: "repeat(1,1fr)", md: "repeat(2,1fr)", lg: "repeat(2,1fr)", xl: "repeat(2,1fr)" }}>

                    <Input placeholder='Enter Your name' value={name} onChange={(e) => setName(e.target.value)} />
                    <InputGroup>  <InputLeftAddon children='+91' />
                        <Input type='tel' placeholder='phone number' maxLength={10} value={number} onChange={(e) => setNumber(e.target.value)} /> </InputGroup>
                    <Input placeholder='Enter Your Current Location' value={currlocation} onChange={(e) => setCurrLocation(e.target.value)} />
                    <Input placeholder='Enter Your Destination' value={destination} onChange={(e) => setDestination(e.target.value)} />
                    <InputGroup size='md'>
                        <Select onChange={(e) => setSeats(e.target.value)} color={"black"} bgColor={"white"}>
                            {arr.map((el, index) => (
                                <option key={index}>{el}</option>
                            ))}

                        </Select>
                    </InputGroup>

                </Grid>
                <Box textAlign={{ base: "center", sm: "center", md: "center", lg: "right", xl: "right" }} pt={5} >
                    <Button variant={"solid"} w={{ base: "100%", sm: "100%", md: "50%", lg: "10%", xl: "10%" }}
                        onClick={handleModal}
                        colorScheme={"facebook"}>Save</Button>
                </Box>
            </Box>
            <Modal
                closeOnOverlayClick={false}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />

                <ModalContent>
                    <ModalHeader>Confirm Passenger Details and Charges</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Stack>
                            <Text>
                              <span>Name:</span> {name}
                            </Text>
                            <Text>
                            <span>Phone Number:</span> {number}
                            </Text>
                            <Text>
                               <span>Current Address:</span> {currlocation}
                            </Text>
                            <Text>
                               <span>Destination:</span> {destination}
                            </Text>
                            <Text>
                                <span>Seats:</span> {seat}
                            </Text>
                            <Text>
                              <span>Distance: </span>  {distance}
                            </Text>
                            <Text>
                               <span>Charges:</span> Rs {charges}
                            </Text>
                        </Stack>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={handleForm}>
                            Proceed
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}

export default AddressPage