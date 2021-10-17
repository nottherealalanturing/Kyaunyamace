import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react"
import { Link as GatsbyLink, navigate } from "gatsby"
import React from "react"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from "../store/actions"
import Card from "./ProductCard/card"

const Item = ({
  id,
  title,
  oldPrice,
  newPrice,
  imagePath,
  category,
  description,
  color,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch = useDispatch()

  const { AddToCart } = bindActionCreators(actionCreators, dispatch)

  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"260px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${imagePath})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            width={[202, 222, 242, 262, 282]}
            objectFit={"contain"}
            src={imagePath}
          />
        </Box>

        <Stack align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            {category}
          </Text>
          <Heading fontSize={"2xl"} fontWeight={800} textTransform="uppercase">
            {title}
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text fontSize={"xl"} fontWeight={500}>
              ₦{newPrice}
            </Text>
            <Text textDecoration={"line-through"} color={"gray.600"}>
              ₦{oldPrice}
            </Text>
          </Stack>
        </Stack>

        <Stack mt={8} direction={"row"} spacing={4}>
          <>
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"md"}
              _focus={{
                bg: "gray.200",
              }}
              as={GatsbyLink}
              state={{ help: "threelo" }}
              onClick={onOpen}
              to="#"
            >
              VIEW
            </Button>

            <Modal
              isOpen={isOpen}
              onClose={onClose}
              scrollBehavior="inside"
              size="lg"
              isCentered
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>{title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody p={4}>
                  <Card
                    id={id}
                    title={title}
                    description={description}
                    price={newPrice}
                    category={category}
                    imagePath={imagePath}
                  />
                </ModalBody>
              </ModalContent>
            </Modal>
          </>

          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"md"}
            bg={"blue.400"}
            color={"white"}
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            }
            _hover={{
              bg: "blue.500",
            }}
            _focus={{
              bg: "blue.500",
            }}
            onClick={() => {
              AddToCart(id)
              navigate("/cart")
            }}
          >
            BUY
          </Button>
        </Stack>
      </Box>
    </Center>
  )
}

export default Item
