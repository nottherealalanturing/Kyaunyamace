import {
  Box,
  Button,
  chakra,
  Container,
  Link,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  useColorModeValue,
} from "@chakra-ui/react"
import { useBreakpointValue } from "@chakra-ui/react"
import { Flex, Text, Image } from "@chakra-ui/react"
import { StaticImage } from "gatsby-plugin-image"
import React, { useState } from "react"

const Card = ({ id, title, description, price, category, imagePath }) => {
  return (
    <Flex p={4} alignItems="center">
      <Flex w="80%" rounded={"md"}>
        <Image
          rounded={"lg"}
          height={230}
          width={282}
          objectFit={"contain"}
          src={imagePath}
        />
      </Flex>
      <Flex w="50%" direction="column">
        <Container>
          <Text
            fontSize="xs"
            textTransform="uppercase"
            color={useColorModeValue("brand.600", "brand.400")}
          >
            {category}
          </Text>
          <Text
            color={useColorModeValue("gray.800", "white")}
            fontWeight="800"
            fontSize="2xl"
            _hover={{ color: "gray.600" }}
          >
            {title}
          </Text>
          <Text fontWeight="600" fontSize="lg">
            Price: ${price}
          </Text>
          <Text
            fontSize="sm"
            color={useColorModeValue("gray.600", "gray.400")}
            dangerouslySetInnerHTML={{ __html: description }}
          ></Text>
        </Container>
        <Button
          px={2}
          py={2}
          my={2}
          bg="white"
          fontSize="xs"
          color="gray.900"
          fontWeight="bold"
          rounded="lg"
          textTransform="uppercase"
          _hover={{
            bg: "gray.200",
          }}
          _focus={{
            bg: "gray.400",
          }}
        >
          Add to cart
        </Button>
      </Flex>
    </Flex>
  )
}

export default Card
