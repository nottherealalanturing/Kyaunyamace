import { Flex, Icon, IconButton, Input } from "@chakra-ui/react"
import { BsSearch } from "@react-icons/all-files/bs/BsSearch"
import { IoIosClose } from "@react-icons/all-files/io/IoIosClose"
import React from "react"

const SearchBar = () => {
  return (
    <>
      <Flex
        w={{ base: "100%", sm: "100%", md: "50%", lg: "50%" }}
        justifyContent="center"
        alignItems="center"
        borderRadius="xl"
        boxSizing="border-box"
        border="1px solid #e8e8e8"
        p={4}
        h="5px"
      >
        <Icon as={BsSearch} />
        <Input
          onChange={() => {}}
          value={""}
          type="text"
          name="product-search"
          id="product-search"
          placeholder="Search Products"
          variant="unstyled"
          fontSize="sm"
          width="100%"
          padding=" 0 0 0 1rem"
        />
        <IconButton as={IoIosClose} aria-label="cancel search" size="1px" />
      </Flex>
    </>
  )
}

export default SearchBar
