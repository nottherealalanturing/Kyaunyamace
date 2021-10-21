import { useColorModeValue } from "@chakra-ui/color-mode"
import {
  Box,
  SimpleGrid,
  GridItem,
  Flex,
  Heading,
  Divider,
  HStack,
  Text,
  Stack,
} from "@chakra-ui/layout"
import { chakra } from "@chakra-ui/system"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import CheckoutForm from "../components/checkoutform"
import * as CurrencyFormat from "react-currency-format"

export default function Component() {
  const [totalItems, setTotalItems] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const cart = useSelector((state: any) => state.shop.cart)

  useEffect(() => {
    let price = 0
    let items = totalPrice === 0 ? 0 : 1
    cart.forEach((item, index) => {
      items += index
      price += parseFloat(item.newPrice)
    })

    setTotalItems(cart.length)
    setTotalPrice(price)
  }, [cart, totalItems, setTotalItems, totalPrice, setTotalPrice])
  return (
    <Flex
      bg={useColorModeValue("gray.50", "inherit")}
      p={10}
      w="100%"
      height="100%"
      justifyContent="center"
      alignItems="center"
    >
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
                  <Text>
                    <CurrencyFormat
                      value={totalPrice}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"₦"}
                    />
                  </Text>
                </HStack>

                <Text mt={4} fontSize="xs">
                  1. Orders will be placed via whatsapp, so make sure you're on
                  a mobile phone.
                </Text>
                <Text mt={4} fontSize="xs">
                  2. Our agent will enquire if multiple quantities of a specific
                  product are needed.
                </Text>
                <Text mt={4} fontSize="xs">
                  3. Place order, if prompted open link with whatsapp.
                </Text>
                <Text mt={4} fontSize="xs">
                  4. Thanks for your patronage.
                </Text>
              </Flex>
            </Box>
          </GridItem>
          <GridItem mt={[5, null, 0]} colSpan={{ md: 2 }}>
            <CheckoutForm />
          </GridItem>
        </SimpleGrid>
      </Box>
    </Flex>
  )
}
