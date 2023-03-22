import { Box, Button, Input, Select, Text } from '@chakra-ui/react'
import React from 'react'

function Payment() {
  return (
    <Box w={"100%"} h={"100vh"}>
      <Box m={"auto"} w={"35%"} bgColor={"#CD5D67"}  boxShadow={"md"}  mt={100} p={5} display={"flex"} flexDir={"column"} gap={5}>

        <Box textAlign={"left"}>
          <Text>Payment Method</Text>
          <Select borderRadius={"none"} bgColor={"white"}>
            <option value="master card">Master Card</option>
          </Select>
        </Box>

        <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
          <Box textAlign={"left"}>
            <Text>First Name</Text>
            <Input bgColor={"white"}  borderRadius={"none"} placeholder='Eg. Aron' />
          </Box>
          <Box textAlign={"left"}>
            <Text>Last Name</Text>
            <Input bgColor={"white"}  borderRadius={"none"} placeholder='Eg. Rodrics' />
          </Box>
        </Box>


        <Box textAlign={"left"}>
          <Text>Card Number</Text>
          <Input bgColor={"white"}  borderRadius={"none"} placeholder='Eg. 1111-2222-3333-4444' />
        </Box>


        <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
          <Box textAlign={"left"}>
            <Text>Expiration Date</Text>
            <Input bgColor={"white"}  borderRadius={"none"} type={"date"} />
          </Box>
          <Box textAlign={"left"}>
            <Text>CVV</Text>
            <Input bgColor={"white"}  borderRadius={"none"} placeholder='Eg. 123' />
          </Box>
        </Box>

        <Box display={"flex"} alignItems={"center"} justifyContent={"end"} >
          <Button bgColor={"orange"} color={"white"}>PAY NOW</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Payment