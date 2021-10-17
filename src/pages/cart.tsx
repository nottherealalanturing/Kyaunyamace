import React, { useEffect, useState } from "react"
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
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react"
import { AiFillEdit } from "@react-icons/all-files/ai/AiFillEdit"
import { BsBoxArrowUpRight } from "@react-icons/all-files/bs/BsBoxArrowUpRight"
import { BsFillTrashFill } from "@react-icons/all-files/bs/BsFillTrashFill"
import CartItem from "../components/cart-item"
import { Link as GatsbyLink } from "gatsby"
import { useDispatch, useSelector } from "react-redux"
import Item from "../components/item"
import { actionCreators } from "../store/actions"
import { bindActionCreators } from "redux"
import Checkout from "../components/Checkout"
import CheckoutForm from "../components/checkoutform"

export default function Component() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch = useDispatch()
  const { RemoveFromCart, AdjustQuantity } = bindActionCreators(
    actionCreators,
    dispatch
  )
  const [input, setInput] = useState(1)
  const [totalItems, setTotalItems] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const cart = useSelector((state: any) => state.shop.cart)

  const onChangeHandler = (e, itemId) => {
    setInput(e)
    AdjustQuantity(itemId, e)
  }

  useEffect(() => {
    let price = 0
    let items = totalPrice === 0 ? 0 : 1
    cart.forEach((item, index) => {
      items += index
      price += parseFloat(item.newPrice)
    })

    setTotalItems(items)
    setTotalPrice(price)
  }, [
    cart,
    totalItems,
    setTotalItems,
    totalPrice,
    setTotalPrice,
    RemoveFromCart,
  ])
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
            <Th fontWeight="600">TITLE</Th>
            <Th fontWeight="600">ITEM</Th>
            {/* <Th fontWeight="600">QUANTITY</Th> */}
            <Th fontWeight="600" isNumeric>
              PRICE
            </Th>
            {/*  <Th fontWeight="600" isNumeric>
              TOTAL
            </Th> */}
          </Tr>
        </Thead>
        <Tbody>
          {cart.map((item, index) => {
            return (
              <Tr>
                <Td textTransform="uppercase" fontWeight="500">
                  {item.title}
                </Td>
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
                {/*  <Td>
                  <NumberInput
                    size="xs"
                    maxW={16}
                    value={input}
                    min={1}
                    onChange={e => {
                      onChangeHandler(e, item.id)
                    }}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Td> */}
                <Td isNumeric>₦{parseFloat(item.newPrice)}</Td>
                {/* <Td isNumeric>
                  ₦{parseFloat(item.newPrice) * parseFloat(item.qty)}
                </Td> */}
                <Td>
                  <IconButton
                    icon={<BsFillTrashFill />}
                    aria-label="delete item"
                    size="xs"
                    _focus={{}}
                    onClick={() => {
                      RemoveFromCart(item.id)
                    }}
                  />
                </Td>
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
            <Text m={4}>{totalItems} Item(s)</Text>
          </HStack>
          <HStack>
            <Text m={4} fontWeight="600">
              Total:
            </Text>
            <Text m={4}>₦{totalPrice}.00</Text>
          </HStack>

          <Button
            fontSize={"sm"}
            rounded={"md"}
            _focus={{
              bg: "gray.200",
            }}
            as={GatsbyLink}
            to="/placeorder"
          >
            Proceed to Checkout
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}
