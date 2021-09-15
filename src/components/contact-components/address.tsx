import { Flex, Icon, Heading, Container } from "@chakra-ui/react"
import { SiGooglemaps } from "@react-icons/all-files/si/SiGooglemaps"
import React from "react"

const Address = () => {
  return (
    <Flex flexDir="column" alignItems="center">
      <Icon as={SiGooglemaps} color="#c4c4c4" fontSize="200%" m={1} />
      {/* <Heading m={1} fontWeight="900">
        ADDRESS
      </Heading> */}
      {/* <Heading fontSize="100%" fontWeight="700">
        Main Office
      </Heading>
      <Container w="70%" fontSize="70%" textAlign="center" fontWeight="600">
        No 1 Photography Studio, Somewhere, Kaduna, Nigeria.
      </Container>
      <Container
        w="70%"
        fontSize="70%"
        textAlign="center"
        m={1}
        fontWeight="600"
      >
        <Heading fontSize="1vw" fontWeight="700" m={1}>
          Branch
        </Heading>
        No 1 Photography Studio, Somewhere, Kaduna, Nigeria.
      </Container> */}
    </Flex>
  )
}

export default Address
