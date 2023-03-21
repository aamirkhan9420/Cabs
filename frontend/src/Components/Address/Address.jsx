import { Box, Button, Grid, Input, InputGroup, InputLeftAddon, Select, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

function AddressPage() {
    let [name, setName] = useState("")
    let [number, setNumber] = useState("")
    let [currlocation, setCurrLocation] = useState("")
    let [destination, setDestination] = useState("")
    let [seat, setSeats] = useState("")
    const toast = useToast()

    let { state } = useLocation()
    let arr=["Select number of seats",1,2,3,4,5,6,7,8]
    let handleForm = () => {
        let address = {
            name,
            number,
            currentLocation: currlocation,
            destination,
            seats:seat
        }
      if(name&&number&&currlocation&&destination&&seat){
         if (Number(state.seats) >= seat) {
            localStorage.setItem("address", JSON.stringify(address))
            toast({
                title: `Address Saved`,
                status: "success",
                isClosable: true,
                position:"top"
              })
        } else {
            toast({
                title: `Only ${state.seats} seats available`,
                status: "error",
                isClosable: true,
                position:"top"
              })
        }
      }else{
        toast({
            title: `All fields required`,
            status: "error",
            isClosable: true,
            position:"top"
          })
      }
       
    }
    return (
        <Box w={"100%"} p={{ base: 2, sm: 10, md: 16, lg: 20, xl: 20 }}>
            <Box boxShadow={"md"} p={{ base: 4, sm: 6, md: 8, lg: 10, xl: 10 }}>
              <Box textAlign={"left"} pb={5}>
                <Text>Passenger Details</Text>
              </Box>
                <Grid gap={5} templateColumns={{ base: "repeat(1,1fr)", sm: "repeat(1,1fr)", md: "repeat(2,1fr)", lg: "repeat(2,1fr)", xl: "repeat(2,1fr)" }}>

                    <Input placeholder='Enter Your name' value={name} onChange={(e)=>setName(e.target.value)} />
                    <InputGroup>  <InputLeftAddon children='+91' />
                        <Input type='tel' placeholder='phone number' value={number} onChange={(e)=>setNumber(e.target.value)} /> </InputGroup>
                    <Input placeholder='Enter Your Current Location' value={currlocation} onChange={(e)=>setCurrLocation(e.target.value)} />
                    <Input placeholder='Enter Your Destination'  value={destination} onChange={(e)=>setDestination(e.target.value)} />
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
                        onClick={handleForm}
                        colorScheme={"facebook"}>Save</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default AddressPage