import Navbar from "./navbar"
import Footer from "./footer"
import React from "react"
import { Box, Container, Flex, VStack } from "@chakra-ui/react"

const Layout = ({ children }) => {
  return (
    <Flex direction="column">
      <Navbar />
      <Flex>{children}</Flex>
    </Flex>
  )
}

export default Layout
/* 
<Flex width="100vw" justifyContent="center">
      <Flex
        direction="column"
        maxHeight="100vh"
        justifyContent="space-between"
        w="100%"
  
      >
        <Navbar />
        <Flex w="100%" alignItems="center" justifyContent="center">
          {children}
        </Flex>
        <Footer />
      </Flex>
    </Flex> */
