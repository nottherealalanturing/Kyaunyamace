import {
  Box,
  Flex,
  HStack,
  IconButton,
  Link as ChakraLink,
  Stack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react"
import { FaWindowClose } from "@react-icons/all-files/fa/FaWindowClose"
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu"
import React, { ReactNode } from "react"
import { Link as GatsbyLink } from "gatsby"
import Logo from "./logo"
const Links = ["shop", "contact", "cart"]

const NavLink = ({ link, children }: { children: ReactNode; link: any }) => (
  <ChakraLink
    as={GatsbyLink}
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    to={`/${link}`}
  >
    {children}
  </ChakraLink>
)

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={[2, 8, 16, 32]}
        boxShadow="md"
        rounded="md"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <FaWindowClose /> : <GiHamburgerMenu />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <ChakraLink as={GatsbyLink} to="/">
              <Logo />
            </ChakraLink>
          </HStack>
          <Flex alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              fontWeight="700"
              fontFamily="overlock"
            >
              {Links.map((link, index) => (
                <NavLink key={index} link={link === "shop" ? "" : link}>
                  {link.toUpperCase()}
                </NavLink>
              ))}
            </HStack>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <NavLink link={"/"}>SHOP</NavLink>
              <NavLink link={"contact"}>CONTACT</NavLink>
              <NavLink link={"cart"}>CHECKOUT</NavLink>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}
