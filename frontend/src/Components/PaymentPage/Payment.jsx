import { Box, Button, Input, InputGroup, InputLeftAddon, Select, Text, useToast } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'


function Payment() {
  let [cardType,setCardType]=useState("mastercard")
  let [cardNum,setCardNum]=useState("")
  const [month, setMonth] = useState(2);
  const [year, setYear] = useState(22);
  const [holder, setHolder] = useState("");
  const [cvv, setCvv] = useState('');
  let [isLoading,setLoading]=useState("")
  let [isOtp,setOtp]=useState(false)

  let {number}=JSON.parse(localStorage.getItem("userinformation"))||""
   let toast=useToast()
 let handleOtp=()=>{
  if(cardType&&cardNum&&holder&&cvv){
    setLoading(true)
   
    setTimeout(() => {
      setOtp(true)
      toast({
        title: "OTP sent to your mobile",
        position: "top",
        isClosable: true,
        status: "success"
      })
    }, 2000);
  }else{
    toast({
      title:"all fields are mendatory",
      position:"top",
      status:"warning",
      isClosable:true
    })
  }
 }

 let handleNext=()=>{
    
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
    <Box w={"100%"} h={"100vh"}>
      <Box m={"auto"} w={"35%"} bgColor={"#CD5D67"}  boxShadow={"md"}  mt={100} p={5} display={"flex"} flexDir={"column"} gap={5}>

        <Box textAlign={"left"}>
          <Text color={"white"}>Payment Method</Text>
          <Select borderRadius={"none"} bgColor={"white"} onChange={(e)=>setCardType(e.target.value)}>
            <option value="mastercard">MasterCard</option>
            <option value="maestro">maestro</option>
            <option value="visa">visa</option>
            <option value="jcb">jcb</option>
            <option value="americanexpress">jcb</option>
            <option value="dinersclub">dinersclub</option>
            <option value="mir">mir</option>
          </Select>
        </Box>

        <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
          <Box textAlign={"left"}>
            <Text color={"white"}>First Name</Text>
            <Input bgColor={"white"}  borderRadius={"none"} placeholder='Eg. Aron' value={holder} onChange={(e)=>{
                  setHolder(e.target.value)}}/>
          </Box>
          <Box textAlign={"left"}>
            <Text color={"white"}>Last Name</Text>
            <Input bgColor={"white"}  borderRadius={"none"} placeholder='Eg. Rodrics'  />
          </Box>
        </Box>


        <Box textAlign={"left"}>
          <Text color={"white"}>Card Number</Text>
         
          <Input  required type="text" inputmode="numeric" pattern="[0-9\s]{13,19}" autocomplete="cc-number" maxlength="19" minLength="16"  ref={inp} id='credit-card-input' bgColor={"white"}  borderRadius={"none"} placeholder='xxxx xxxx xxxx xxxx' value={cardNum} onChange={handleInp} />
        </Box>


        <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
          <Box textAlign={"left"}>
            <Text color={"white"}>Expiration Date</Text>
            <Input bgColor={"white"}  borderRadius={"none"} type={"month"}   min="2020-06"      max="2026-09"/>
          </Box>
          <Box textAlign={"left"}>
            <Text color={"white"}>CVV</Text>
            <Input bgColor={"white"} maxlength="3"  borderRadius={"none"} placeholder='Eg. 123' type={"password"} value={cvv} onChange={(e)=>setCvv(e.target.value)}/>
          </Box>
        </Box>



        <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
          <Box textAlign={"left"}>
            <Text color={"white"}>Enter Mobile Number </Text>
            <InputGroup> 
            <InputLeftAddon children='+91' />
            <Input bgColor={"white"}  borderRadius={"none"} value={number} />
            </InputGroup>
            </Box>
           {isLoading&&isOtp? <Box textAlign={"left"}>
            <Text color={"white"}>OTP</Text>
            <Input  bgColor={"white"} maxlength="6"  borderRadius={"none"}  placeholder='Enter OTP' onClick={()=>handleNext()}/>
            </Box>:""}
         </Box>

   
        <Box display={"flex"} alignItems={"center"} justifyContent={"end"} >
          {isLoading&&isOtp?<Button bgColor={"orange"} maxlength={4} color={"white"} >NEXT</Button>:<Button bgColor={"orange"} color={"white"} onClick={()=>handleOtp()}>GET OTP</Button>}
        </Box>
      </Box>

    </Box>
  )
}

export default Payment