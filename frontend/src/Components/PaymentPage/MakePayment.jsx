import { Box, Button, Collapse, Text, useDisclosure, useToast } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux"
import { deleteBookingf } from "../../Store/GetBookingSlice"
import { Navigate, useNavigate } from "react-router-dom"

export default function MakePayment({ handleNext, paymentStatus }) {
    const { isOpen, onToggle } = useDisclosure()
    let toast = useToast()
    let navigate = useNavigate()
    let dispatch = useDispatch()
    let booking = useSelector((state) => {
        return state.getBooking.data
    })
    let handleMakePayment = () => {
        let { id } = booking.find(({ userId }) => userId === "aamir123")
        dispatch(deleteBookingf(id))


        toast({
            title: "booking cancel successfully",
            isClosable: true,
            position: "top",
            status: "success"
        })
        setTimeout(() => {
            navigate("/")
        }, 1000)

    }


    return (
        <>
            <Button bgColor={"orange"} color={"white"} onClick={() => handleNext(onToggle)}>NEXT</Button>
            <Collapse in={isOpen} animateOpacity>
                <Box
                    p={{ base: "10px", sm: "30px", md: "35px", lg: "40px", xl: "40px" }}
                    color='white'
                    mt='4'
                    bg='#17BEBB'
                    rounded='md'
                    shadow='md'
                >
                    <Text bgColor={"black"}>You are cancelling the booking after <span>{paymentStatus.newTime} </span>
                        minutes of booking time there for <span> {paymentStatus.percent} </span>of total charges ie. <span>
                            Rs {paymentStatus.newcharge}</span> will be applied.
                    </Text>
                    <Box w={"100%"} gap={2} pt={2} display={"flex"} flexDir={{ base: "column", sm: "row", md: "row", lg: "row", xl: "row" }}
                        alignItems={{ base: "", sm: "center", md: "center", lg: "center", xl: "center" }} justifyContent={"space-between"}>
                        <Text bgColor={"black"} padding={2}>Charges: <span>Rs{paymentStatus.newcharge}</span> </Text>
                        <Button bgColor={"green"} color={"white"} onClick={handleMakePayment}>Make Payment</Button>
                    </Box>

                </Box>
            </Collapse>
        </>
    )
}