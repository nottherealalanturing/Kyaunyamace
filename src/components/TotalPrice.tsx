import {
  Flex,
  Icon,
  FormControl,
  FormLabel,
  Input,
  Grid,
  Text,
} from "@chakra-ui/react"
import { BiEdit } from "@react-icons/all-files/bi/BiEdit"
import { BsPerson } from "@react-icons/all-files/bs/BsPerson"
import { GoLocation } from "@react-icons/all-files/go/GoLocation"
import { HiOutlinePhone } from "@react-icons/all-files/hi/HiOutlinePhone"
import React from "react"
import CartItem from "./cart-item"

export const TotalPrice = (
  <Flex
    borderWidth="1px"
    borderRadius="lg"
    direction="column"
    alignItems="center"
    p={4}
    /* width={{ base: "100%", sm: "100%", md: "100%", lg: "50%" }} */
    mt={2}
    w="xl"
  >
    <Flex w="100%" justifyContent="space-between">
      <Text>Subtotal: </Text>
      <Text>$605.00</Text>
    </Flex>
    <Flex w="100%" justifyContent="space-between">
      <Text>Taxes: </Text>
      <Text>$0.00</Text>
    </Flex>
    <Flex w="100%" justifyContent="space-between">
      <Text>Total price: </Text>
      <Text>$605.00</Text>
    </Flex>
  </Flex>
)
