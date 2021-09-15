import { Flex, Icon, Heading, Text } from "@chakra-ui/react";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import React from "react";

const Facebook = () => {
  return (
    <Flex flexDir="column" alignItems="center">
      <Icon as={FaFacebook} color="#c4c4c4" fontSize="200%" m={1} />
      {/* <Text m={1} fontWeight="900" textAlign="center" w="100%">
        {config.title}
      </Text> */}
    </Flex>
  );
};

export default Facebook;
