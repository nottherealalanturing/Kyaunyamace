import { Flex, Icon, Heading, Text } from "@chakra-ui/react"
import { BsPhone } from "@react-icons/all-files/bs/BsPhone"
import React from "react"

const Phone = () => {
  return (
    <Flex flexDir="column" alignItems="center">
      <Icon as={BsPhone} color="#c4c4c4" fontSize="200%" m={1} />
      {/* <Text m={1} fontWeight="900" textAlign="center" w="100%">
        +234 8123 4323
      </Text> */}
    </Flex>
  )
}

export default Phone
