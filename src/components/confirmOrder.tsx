import { Flex, Grid } from "@chakra-ui/react"
import React from "react"
import CartItem from "./cart-item"
import Item from "./item"

export const confirmOrder = (
  <Flex
    textAlign="left"
    py={2}
    px={4}
    borderWidth="1px"
    borderRadius="lg"
    h="250px"
  >
    <Grid templateColumns={`repeat(3, 1fr)`} overflowY="scroll" gap={4}>
      {Array(10)
        .fill("a")
        .map((a, b) => (
          <CartItem
            imagePath={"/4.png"}
            description="5%"
            category="1"
            title="Duck"
            newPrice="100"
            oldPrice="150"
            key={b}
          />
        ))}
    </Grid>
  </Flex>
)
