import {
  Box,
  chakra,
  Container,
  Flex,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react"
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"

import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp"
import React, { ReactNode } from "react"
import { title } from "../../data/data"
import Logo from "./logo"

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode
  label: string
  href: string
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function SmallWithLogoLeft() {
  return (
    <Flex
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      w="100%"
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Logo />
        <Text>© 2021 {title}. All rights reserved</Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton
            label={"Whatsapp"}
            href={"https://wa.me/+2348091294278?text=Hi"}
          >
            <FaWhatsapp />
          </SocialButton>
          <SocialButton
            label={"Facebook"}
            href={"https://web.facebook.com/ZUWAGA1"}
          >
            <FaFacebook />
          </SocialButton>
          <SocialButton
            label={"Instagram"}
            href={"http://instagram.com/kyaun_ya_mace_"}
          >
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Flex>
  )
}
