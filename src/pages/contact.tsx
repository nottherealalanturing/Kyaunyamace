import { Box, Center, Flex, Heading, Link } from "@chakra-ui/react"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Address from "../components/contact-components/address"
import Email from "../components/contact-components/email"
import Facebook from "../components/contact-components/facebook"
import Instagram from "../components/contact-components/instagram"
import Phone from "../components/contact-components/phone"
import Twitter from "../components/contact-components/twitter"
import Whatsapp from "../components/contact-components/whatsapp"
import Footer from "../components/footer"

const Contact = () => {
  return (
    <Flex w="100vw" direction="column">
      <Flex direction="column" w="100%" p={8}>
        <StaticImage
          src="../images/cont.jpg"
          alt="contact"
          layout="fullWidth"
          aspectRatio={5}
          objectFit="contain"
        />
        <Center my={4}>
          <Heading fontSize={"5vh"} textAlign="center">
            YOU CAN REACH US THROUGH
          </Heading>
        </Center>

        <Center my={4} w="100%" justifyContent="space-between">
          <Link
            href={"http://instagram.com/kyaun_ya_mace_"}
            _focus={{}}
            textDecoration="none"
          >
            <Instagram />
          </Link>
          <Link href={"tel:+8024785022"}>
            <Phone />
          </Link>

          <Address />

          <Link href={"https://web.facebook.com/ZUWAGA1"}>
            <Facebook />
          </Link>
          <Link href={"https://wa.me/+2348091294278?text=Hi"}>
            <Whatsapp />
          </Link>
        </Center>
      </Flex>
      <Box pos="fixed" bottom="0" left="0" w="100%">
        <Footer />
      </Box>
    </Flex>
  )
}

export default Contact
