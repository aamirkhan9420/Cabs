import { Box, Image,Icon, Text, Grid} from '@chakra-ui/react'
import React from 'react'
import {SlSocialFacebook, SlSocialGithub, SlSocialInstagram, SlSocialLinkedin, SlSocialTwitter, SlSocialYoutube} from 'react-icons/sl'
import Logo from '../Logo/Logo'




function Footer() {
  return (
    <Box  w={"100%"} bgColor={"black"} position="static"
    left={0}
    bottom={0}>
     <Box margin={"auto"} width={"80%"}>
        {/* --------Fist box------- */}
        <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} pt={10} pb={10} >
       <Box h={"100px"} m={"auto"}>
          <Logo />
       </Box>
        
           <Box m={"auto"} display={{ base: "none", sm: "none", md: "flex", lg: "flex", xl: "flex" }} justifyContent={"space-between"} alignItems={"center"} gap={{ base:4 , sm: 6, md: 8, lg:10, xl:10 }} fontSize={25} >
           <Box><Text color={"gray"}>Follow us-</Text></Box>
           <Box><Icon color={"gray"}  as={SlSocialTwitter }/></Box>
           <Box><Icon color={"gray"} as={SlSocialInstagram }/></Box>
           <Box><Icon color={"gray"} as={SlSocialLinkedin }/></Box>
           <Box><Icon  color={"gray"} as={SlSocialFacebook }/></Box>
           <Box><Icon color={"gray"}  as={SlSocialGithub }/></Box>         
           </Box>
        </Box>
        {/* -------second box------ */}
        <Grid borderTop={"3px solid gray"} color="gray" gridTemplateColumns={{ base: "repeat(1,1fr)", sm: "repeat(2,1fr)", md: "repeat(2,1fr)", lg: "repeat(3,1fr)", xl: "repeat(3,1fr)" }} gap={5} fontSize={20} p={10}>

          
           <Box><Text>Our Team</Text></Box>
           <Box><Text>Blog</Text></Box>
           <Box><Text>About us</Text></Box>
           <Box><Text>FAQ</Text></Box>
           <Box><Text>Newsroom</Text></Box>
           <Box><Text>Contact Us </Text></Box>
    
            </Grid>
        {/* ---------------for base and small screen --------- */}
        <Box display={{ base: "flex", sm: "flex", md: "none", lg: "none", xl: "none" }} justifyContent={"space-between"} alignItems={"center"} gap={{ base:2 , sm: 4}} fontSize={{ base:20 , sm: 22}} >
           <Box><Text color={"gray"}>Follow us-</Text></Box>
           <Box><Icon color={"gray"}  as={SlSocialTwitter }/></Box>
           <Box><Icon color={"gray"} as={SlSocialInstagram }/></Box>
           <Box><Icon color={"gray"} as={SlSocialLinkedin }/></Box>
           <Box><Icon  color={"gray"} as={SlSocialFacebook }/></Box>
           <Box><Icon color={"gray"}  as={SlSocialGithub }/></Box>         
           </Box>

     </Box>
    </Box>
  )
}

export default Footer