import { Flex, Icon, Heading, Text } from "@chakra-ui/react"
import { HiOutlineMail } from "@react-icons/all-files/hi/HiOutlineMail"
import React from "react"

const Email = () => {
  return (
    <Flex flexDir="column" alignItems="center">
      <Icon as={HiOutlineMail} color="#c4c4c4" fontSize="200%" m={1} />
      {/* <Text m={1} fontWeight="900" textAlign="center" w="100%">
        <a href="mailto:something">email@address.com</a>
      </Text> */}
    </Flex>
  )
}

export default Email
