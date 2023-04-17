import { Box, Button, Input, InputGroup, InputLeftAddon, Select, Text, useToast } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import MakePayment from './MakePayment';
import { useLocation } from 'react-router-dom';


function Payment() {
  let [cardType, setCardType] = useState("mastercard")
  let [cardNum, setCardNum] = useState("")
  const [holder, setHolder] = useState("");
  let [lastName,setLastName]=useState("")
  const [cvv, setCvv] = useState('');
  let [isLoading, setLoading] = useState("")
  let [isOtp, setIsOtp] = useState(false)
  let [otp, setOTP] = useState("")
  let [showInput, setShowInput] = useState(false)
  let { number } = JSON.parse(localStorage.getItem("userinformation")) || ""
  let toast = useToast()
  let location = useLocation()
  
  let handleOtp = () => {
    if (cardType && cardNum && holder && cvv && lastName) {
      if (cardNum.length === 19) {
       if(cvv.length===3){
       setLoading(true)
        setTimeout(() => {
          setIsOtp(true)
          setShowInput(true)
          toast({
            title: "OTP sent to your mobile",
            position: "top",
            isClosable: true,
            status: "success"
          })
        }, 2000);
       }else{
        toast({
          title: "CVV must be 3 digits",
          position: "top",
          isClosable: true,
          status: "warning"
        })
       }
        
      } else {
        toast({
          title: "Card number must be 16 digits",
          position: "top",
          isClosable: true,
          status: "warning"
        })
      }

    } else {
      toast({
        title: "All fields are mandatory",
        position: "top",
        status: "warning",
        isClosable: true
      })
    }
  }
  let handleNext = (onToggle) => {
    if (otp.length < 4) {
      toast({
        title: "OTP must be 4 digits",
        position: "top",
        status: "warning",
        isClosable: true
      })
    } else {
      setShowInput(false)
      onToggle()
    }

  }
  // card number card number---//
  let inp = useRef()
  let handleInp = () => {
    inp.current.addEventListener("input", () => inp.current.value = formatNumber(inp.current.value.replaceAll(" ", "")));
    const formatNumber = (number) => number.split("").reduce((seed, next, index) => {
      if (index !== 0 && !(index % 4)) seed += " ";
      setCardNum(seed + next)
      return seed + next;
    }, "");
  }
  return (
    <Box w={"100%"} pb={150}>
      <Box m={"auto"} 
      w={{base:"95%" ,sm:"95%" , md:"65%" , lg:"50%" , xl:"40%" }}
      bgColor={"#CD5D67"} boxShadow={"md"} mt={100} p={5} display={"flex"} flexDir={"column"} gap={5}>

        <Box textAlign={"left"}>
          <Text color={"white"}>Payment Method</Text>
          <Select borderRadius={"none"} bgColor={"white"} onChange={(e) => setCardType(e.target.value)}>
            <option value="mastercard">MasterCard</option>
            <option value="maestro">maestro</option>
            <option value="visa">visa</option>
            <option value="jcb">jcb</option>
            <option value="americanexpress">jcb</option>
            <option value="dinersclub">dinersclub</option>
            <option value="mir">mir</option>
          </Select>
        </Box>

      
        <Box display={"flex"} 
        flexDir={{base:"column" ,sm:"row" , md:"row" , lg:"row" , xl:"row" }}       
         alignItems={{base:"" ,sm:"center", md:"center" , lg:"center", xl:"center"}} justifyContent={"space-between"}>
          <Box textAlign={"left"}>
            <Text color={"white"}>First Name</Text>
            <Input bgColor={"white"} borderRadius={"none"} placeholder='Eg. Aron' value={holder} onChange={(e) => setHolder(e.target.value)} />
          </Box>
          <Box textAlign={"left"}>
            <Text color={"white"}>Last Name</Text>
            <Input bgColor={"white"} borderRadius={"none"} placeholder='Eg. Rodrics' value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
          </Box>
        </Box>


        <Box textAlign={"left"}>
          <Text color={"white"}>Card Number</Text>
          <Input required type="text" inputMode="numeric" pattern="[0-9\s]{13,19}" autoComplete="cc-number" maxLength="19" minLength="16" ref={inp} id='credit-card-input' bgColor={"white"} borderRadius={"none"} placeholder='xxxx xxxx xxxx xxxx' value={cardNum} onChange={handleInp} />
        </Box>


        <Box display={"flex"} flexDir={{base:"column" ,sm:"row" , md:"row" , lg:"row" , xl:"row" }}       
       alignItems={{base:"" ,sm:"center", md:"center" , lg:"center", xl:"center"}} justifyContent={"space-between"}>
          <Box textAlign={"left"}>
            <Text color={"white"}>Expiration Date</Text>
            <Input bgColor={"white"} borderRadius={"none"} type={"month"} min="2020-06" max="2026-09" />
          </Box>
          <Box textAlign={"left"}>
            <Text color={"white"}>CVV</Text>
            <Input bgColor={"white"} maxLength="3" borderRadius={"none"} placeholder='Eg. 123' type={"password"} value={cvv} onChange={(e) => setCvv(e.target.value)} />
          </Box>
        </Box>



        <Box display={"flex"} flexDir={{base:"column" ,sm:"row" , md:"row" , lg:"row" , xl:"row" }}
              alignItems={{base:"" ,sm:"center", md:"center" , lg:"center", xl:"center"}} justifyContent={"space-between"}>
          <Box textAlign={"left"}>
            <Text color={"white"}>Enter Mobile Number </Text>
            <InputGroup>
              <InputLeftAddon children='+91' />
              <Input bgColor={"white"} borderRadius={"none"} value={number} />
            </InputGroup>
          </Box>
          {isLoading && isOtp && showInput ? 
          <Box textAlign={"left"}>
            <Text color={"white"}>OTP</Text>
            <Input bgColor={"white"} maxLength="4" type={"password"} value={otp} borderRadius={"none"} placeholder='Enter OTP' onChange={(e) => setOTP(e.target.value)} />
          </Box> : ""}
        </Box>


        <Box display={"flex"} alignItems={"center"} justifyContent={"end"} >
          {!isLoading && !isOtp &&
            <Button bgColor={"orange"} color={"white"} onClick={() => handleOtp()}>GET OTP</Button>}
        </Box>
        {isLoading && isOtp && <MakePayment handleNext={handleNext} paymentStatus={location.state} />}

      </Box>

    </Box>
  )
}

export default Payment