import {
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import React from "react"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from "../../store/actions"
import * as CurrencyFormat from "react-currency-format"

const Card = ({ id, title, description, price, category, imagePath }) => {
  const dispatch = useDispatch()
  const { AddToCart } = bindActionCreators(actionCreators, dispatch)
  return (
    <Flex p={4} alignItems="center">
      <Flex w="80%">
        <Image
          rounded={"lg"}
          width={[202, 222, 242, 262, 282]}
          objectFit={"contain"}
          src={imagePath}
        />
      </Flex>
      <Flex w="50%" direction="column">
        <Container>
          <Text
            fontSize="xs"
            color={useColorModeValue("brand.600", "brand.400")}
            textTransform={"uppercase"}
            fontFamily="roboto"
          >
            {category}
          </Text>
          <Heading
            color={useColorModeValue("gray.800", "white")}
            _hover={{ color: "gray.600" }}
            fontSize={"xl"}
            fontWeight={800}
            textTransform="uppercase"
            fontFamily="roboto"
          >
            {title}
          </Heading>
          <Text fontWeight="200" fontSize="lg" fontFamily="roboto">
            Price:
            <CurrencyFormat
              value={price}
              displayType={"text"}
              thousandSeparator={true}
              prefix={" ₦"}
            />
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
          onClick={() => {
            AddToCart(id)
          }}
        >
          Add to cart
        </Button>
      </Flex>
    </Flex>
  )
}

export default Card
