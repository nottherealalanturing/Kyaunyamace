import { Flex, Icon, FormControl, FormLabel, Input } from "@chakra-ui/react"
import { BiEdit } from "@react-icons/all-files/bi/BiEdit"
import { BsPerson } from "@react-icons/all-files/bs/BsPerson"
import { GoLocation } from "@react-icons/all-files/go/GoLocation"
import { HiOutlinePhone } from "@react-icons/all-files/hi/HiOutlinePhone"
import React from "react"

export const ContactAddress = (
  <Flex
    w="xl"
    justifyContent="space-between"
    alignItems="center"
    direction="column"
  >
    <Icon as={BiEdit} m={2} />
    <Flex
      w={{ base: "100%", sm: "100%", md: "100%", lg: "50%" }}
      justifyContent="space-between"
      alignItems="center"
      direction="column"
    >
      <FormControl id="first-name" isRequired>
        <FormLabel display="flex" alignItems="center">
          <Icon as={BsPerson} mx={1} />
          <Input placeholder="Enter Your Name" />
        </FormLabel>
        <FormLabel display="flex" alignItems="center">
          <Icon as={GoLocation} mx={1} />
          <Input placeholder="Enter Your Location" />
        </FormLabel>
        <FormLabel display="flex" alignItems="center">
          <Icon as={HiOutlinePhone} mx={1} />
          <Input placeholder="Enter Your Phone" />
        </FormLabel>
      </FormControl>
    </Flex>
  </Flex>
)
