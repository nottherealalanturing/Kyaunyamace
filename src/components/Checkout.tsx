import {
  Box,
  Button,
  chakra,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  HStack,
  Input,
  InputGroup,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react"
import React, { useState } from "react"
import CheckoutForm from "./checkoutform"

export default function Checkout({ totalItems, totalPrice }) {
  const [orderName, setOrderName] = useState("")
  const [shippingAddress, setshippingAddress] = useState("")

  const handleChange = e => {
    console.log(e)
  }
  return (
    <Box bg={useColorModeValue("gray.50", "inherit")} p={10}>
      <Box>
        <SimpleGrid
          display={{ base: "initial", md: "grid" }}
          columns={{ md: 3 }}
          spacing={{ md: 6 }}
        >
          <GridItem colSpan={{ md: 1 }}>
            <Box px={[4, 0]}>
              <Flex h="100%" direction="column">
                <Heading my={4} fontSize="xs">
                  Order Summary
                </Heading>
                <Divider orientation="horizontal" />
                <HStack>
                  <Text my={4} fontSize="xs">
                    Your Orders:
                  </Text>
                  <Text fontSize="xs">{totalItems} Items</Text>
                </HStack>
                <HStack>
                  <Text my={4} fontWeight="600">
                    Total:
                  </Text>
                  <Text>₦{totalPrice}.00</Text>
                </HStack>

                <Text mt={4} fontSize="xs">
                  1. Orders will be placed via whatsapp, so make sure you're on
                  a mobile phone.
                </Text>
                <Text mt={4} fontSize="xs">
                  2. Our agent will enquire if multiple quantities of a specific
                  product are needed.
                </Text>
              </Flex>
            </Box>
          </GridItem>
          <GridItem mt={[5, null, 0]} colSpan={{ md: 2 }}>
            <chakra.form
              method="POST"
              shadow="base"
              rounded={[null, "md"]}
              overflow={{ sm: "hidden" }}
            >
              <Stack
                px={4}
                py={5}
                bg={useColorModeValue("white", "gray.700")}
                spacing={6}
                p={{ sm: 6 }}
              >
                <CheckoutForm />
              </Stack>
            </chakra.form>
          </GridItem>
        </SimpleGrid>
      </Box>
    </Box>
  )
}
