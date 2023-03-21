import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, IconButton, Image, Menu, MenuIcon, Stack, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { HamburgerIcon } from '@chakra-ui/icons'
import Logo from '../Logo/Logo'




function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    // {base:"",sm:"",md:"",lg:"",xl:""}
    <Flex position="sticky" top={0} zIndex={700} boxShadow={"md"} h={"80px"} alignItems={"center"} justifyContent={"space-between"} p={2} bgColor={"#CD5D67"} color={"white"}>
      <Logo />
      <Box display={{ base: "none", sm: "none", md: "none", lg: "flex", xl: "flex" }} alignItems={"center"} justifyContent={"space-evenly"} w={{ base: "50%", sm: "45%", md: "45%", lg: "40%", xl: "40%" }} h={"100%"}>
        <NavLink to={"/booking"}>
          Booking
        </NavLink>
        <NavLink to={"/profile"}>
          Profile
        </NavLink>
      </Box>
      <Box display={{ base: "flex", sm: "flex", md: "flex", lg: "none", xl: "none" }} alignItems={"center"} justifyContent={"space-evenly"}>
        <HamburgerIcon
          as={HamburgerIcon}
          onClick={onOpen}
          fontSize={30}
        />
        <Drawer isOpen={isOpen}
          placement='right'
          onClose={onClose}>
          <DrawerOverlay />

          <DrawerContent bgColor={"#CD5D67"} color={"white"}>
            <DrawerCloseButton />
            <DrawerHeader>
              <Box h={20} w={"90%"}>
                <Link to={"/"}>
                  <Image w={"100%"} h={"100%"} src='./cabLogo.png' />
                </Link>
              </Box>
            </DrawerHeader>
            <DrawerBody>
              <Stack spacing={3}>
                <NavLink to={"/booking"}>
                  Booking
                </NavLink>
                <NavLink to={"/profile"}>
                  Profile
                </NavLink>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Flex>
  )

}

export default Navbar