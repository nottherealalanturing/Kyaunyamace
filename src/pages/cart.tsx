import React from "react"
import {
  Flex,
  Link as ChakraLink,
  useColorModeValue,
  ButtonGroup,
  IconButton,
  Text,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Tfoot,
  TableCaption,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Heading,
  Divider,
  HStack,
  Button,
} from "@chakra-ui/react"
import { AiFillEdit } from "@react-icons/all-files/ai/AiFillEdit"
import { BsBoxArrowUpRight } from "@react-icons/all-files/bs/BsBoxArrowUpRight"
import { BsFillTrashFill } from "@react-icons/all-files/bs/BsFillTrashFill"
import CartItem from "../components/cart-item"
import { Link as GatsbyLink } from "gatsby"
import { useSelector } from "react-redux"
import Item from "../components/item"

export default function Component() {
  const cart = useSelector((state: any) => state.shop.cart)
  return (
    <Flex
      w="100%"
      p="4"
      direction={["column", "column", "row", "row"]}
      alignItems="flex-start"
    >
      <Table
        size="sm"
        w={["40%", "40%", "60%", "70%"]}
        alignSelf="center"
        variant="simple"
        mx="4"
      >
        <Thead>
          <Tr>
            <Th fontWeight="600">ITEM</Th>
            <Th fontWeight="600">QUANTITY</Th>
            <Th fontWeight="600" isNumeric>
              PRICE
            </Th>
            <Th fontWeight="600" isNumeric>
              TOTAL
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {cart.map((item, index) => {
            return (
              <Tr>
                <Td>
                  <CartItem
                    id={item.id}
                    title={item.title}
                    oldPrice={item.oldPrice}
                    newPrice={item.newPrice}
                    imagePath={item.imagePath}
                    category={item.category}
                    description={item.description}
                    quantity={item.qty}
                  />
                </Td>
                <Td>
                  <NumberInput size="xs" maxW={16} defaultValue={1} min={1}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Td>
                <Td isNumeric>25.4</Td>
                <Td isNumeric>25.4</Td>
              </Tr>
            )
          })}
        </Tbody>
      </Table>
      <Flex
        bg={useColorModeValue("#F9FAFB", "gray.600")}
        p={50}
        w={["100%", "100%", "40%", "30%"]}
        justifyContent="center"
        shadow="lg"
        rounded="lg"
        overflow="hidden"
      >
        <Flex h="100%" direction="column">
          <Heading m={4}>Order Summary</Heading>
          <Divider orientation="horizontal" />
          <HStack>
            <Text m={4} fontWeight="500">
              Your Orders:
            </Text>
            <Text m={4}>{3} Items</Text>
          </HStack>
          <HStack>
            <Text m={4} fontWeight="500">
              SubTotal:
            </Text>
            <Text m={4}>${300}</Text>
          </HStack>
          <HStack>
            <Text m={4} fontWeight="500">
              Delivery Fee:
            </Text>
            <Text m={4}>${300}</Text>
          </HStack>
          <HStack>
            <Text m={4} fontWeight="600">
              Total:
            </Text>
            <Text m={4}>${300}</Text>
          </HStack>
          <Button>Proceed to Checkout</Button>
        </Flex>
      </Flex>
    </Flex>
  )
}
