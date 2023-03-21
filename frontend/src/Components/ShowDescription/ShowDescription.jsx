import { Box, Button, Collapse, HStack, Text, useDisclosure } from "@chakra-ui/react"
import { useState } from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
export function ShowDescription() {
    const { isOpen, onToggle } = useDisclosure()
    const [show, setShow] = useState(false)
    const handleText = () => setShow(!show)
    let handleToggle = () => {
        onToggle()
        handleText()
    }
    return (
        <>
            <HStack spacing='10px' cursor={"pointer"} onClick={handleToggle} >
                <Text color={"blue"} >

                    {show ? 'Close X' : 'More Information'}
                </Text>

                {!show && <AiOutlineExclamationCircle color="blue" />}
            </HStack>

            <Collapse in={isOpen} animateOpacity>
                <Box
                    p='10px'
                    color='white'
                    mt='4'
                    bgColor={"#CD5D67"}
                    rounded='md'
                    shadow='md'
                    textAlign={"left"}
                >
                    If user canceling the booking after 1min of booking time then 10% charges of total  booking charge will be applied.
                    if user canceling the booking after 2min of booking time then 15% charges of total  booking charge will be applied.
                    if user canceling the booking after 3min of booking time then 20% charges of total  booking charge will be applied
                    if user canceling the booking after 4min of booking time then full charge will be applied.
                </Box>
            </Collapse>
        </>
    )
}