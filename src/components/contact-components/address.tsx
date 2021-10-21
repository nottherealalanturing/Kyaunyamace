import {
  Flex,
  Icon,
  Heading,
  Container,
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  IconButton,
} from "@chakra-ui/react"
import { SiGooglemaps } from "@react-icons/all-files/si/SiGooglemaps"
import React from "react"

const Address = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <IconButton
          icon={<SiGooglemaps />}
          aria-label="address"
          color="#c4c4c4"
          fontSize="200%"
          m={1}
        />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Address</PopoverHeader>
        <PopoverBody>
          SF 10 SHAI PLAZA, NUPE ROAD BY ABEOKUTA STEET, KADUNA
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default Address
