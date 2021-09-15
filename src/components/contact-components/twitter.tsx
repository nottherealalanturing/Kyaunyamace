import { Flex, Icon, Heading, Text } from "@chakra-ui/react";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import React from "react";

const Twiiter = () => {
  return (
    <Flex flexDir="column" alignItems="center">
      <Icon as={FaTwitter} color="#c4c4c4" fontSize="200%" m={1} />
      {/* <Text m={1} fontWeight="900" textAlign="center" w="100%">
        {config.title}
      </Text> */}
    </Flex>
  );
};

export default Twiiter;
