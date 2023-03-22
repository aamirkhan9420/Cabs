import { Badge, Box, Button, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay,  Text, useDisclosure, useToast } from '@chakra-ui/react'
import React, {  useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteBookingf } from '../../Store/GetBookingSlice'
import RatingChanged from '../StarRating/StarRating'


function CardBox({ props, isdisable }) {
  //----- for warning modal----------//
  let [newcharge, setNewCharge] = useState("")
  let [newTime, setNewTime] = useState("")
  let [oldcharge, setOldCharge] = useState("")
  let [percent, setPercent] = useState("")
  let { isOpen, onClose, onOpen } = useDisclosure() 
  let navigate = useNavigate()
  let booking = useSelector((state) => {
    return state.getBooking.data
  })
  let dispatch = useDispatch()
  //----- for warning modal End----------//


 
  let toast = useToast()
  
  let handleSinglePage = () => {
    let x = booking.find(({ userId }) => userId === "aamir123")
    if (x === undefined) {
      navigate("/singlepage", { state: props })
    } else {
      toast({
        title: "You have Booked already an cab please cancel first cab booking then try for another cab ",
        position: "top",
        duration: 9000,
        isClosable: true,
        status: "warning"
      })
    }

  }

  //----- for warning modal----------//
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

  let handledelete = () => {
    let { id } = booking.find(({ userId }) => userId === "aamir123")
    dispatch(deleteBookingf(id))
    onClose()
    
  }
  //----- for warning modal End----------//  



  return (
    <Box boxShadow={"md"} borderRadius={10} pb={2}>
      <Box borderTopLeftRadius={10} borderTopRightRadius={10}  >
        <Image  borderTopLeftRadius={10} borderTopRightRadius={10} m={"auto"} src={props.image} />
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

      <Box p={2} gap={2} display={"flex"} flexDir={{ base: "column", sm: "column", md: "row", lg: "row", xl: "row" }} alignItems={"left"} justifyContent={"space-evenly"}>
        {isdisable === props.id && <Button pl={7} pr={7} variant={"solid"} colorScheme={"red"} onClick={handleModal}>Cancel</Button>}

        <Button variant={"solid"} isDisabled={isdisable === props.id} colorScheme={"facebook"} onClick={() => handleSinglePage(props)}>Book Now</Button>
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

export default CardBox