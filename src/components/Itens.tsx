import {
  Badge,
  Button,
  Flex,
  HStack,
  Icon,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react"
import React from "react"
import { GoPrimitiveDot } from "@react-icons/all-files/go/GoPrimitiveDot"
import { GoVerified } from "@react-icons/all-files/go/GoVerified"
import { StaticImage } from "gatsby-plugin-image"

const Iten = ({ imageSrc, name, oldPrice, discount, newPrice, inStock }) => {
  return (
    <Flex w="10vw">
      <StaticImage
        src="../images/duck.jpg"
        alt={"item.name"}
        loading={"eager"}
      />
    </Flex>
  )
}

export default Iten
