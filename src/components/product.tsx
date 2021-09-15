import {
  Button,
  Flex,
  Icon,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react"
import { GoStar } from "@react-icons/all-files/go/GoStar"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import ReactSlick from "react-slick"

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const Product = ({ name, oldPrice, discount, newPrice, inStock }) => {
  const [value, setValue] = React.useState("")
  const direction = useBreakpointValue({
    base: "column",
    sm: "column",
    md: "row",
    lg: "row",
  })
  return (
    <Flex justifyContent="center" alignItems="center">
      <Flex
        justifyContent="space-around"
        /* w="100vw" */
        w="100%"
        direction={direction}
        alignItems="center"
      >
        <Flex d="block" w="10vw">
          <ReactSlick {...settings}>
            <StaticImage
              src="../images/duck.jpg"
              objectFit="contain"
              alt="contain"
            />
            <StaticImage
              src="../images/duck.jpg"
              objectFit="contain"
              alt="contain"
            />
            <StaticImage
              src="../images/duck.jpg"
              objectFit="contain"
              alt="contain"
            />
            <StaticImage
              src="../images/duck.jpg"
              objectFit="contain"
              alt="contain"
            />
            <StaticImage
              src="../images/duck.jpg"
              objectFit="contain"
              alt="contain"
            />
          </ReactSlick>
        </Flex>
        <Flex direction="column" w="50%" justifyContent="center">
          <Text
            fontFamily="roboto"
            fontWeight="700"
            textAlign="center"
            fontSize="2xl"
            mb={2}
          >
            Title
          </Text>
          <Text mb={2}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
            officiis natus consequuntur libero, adipisci dicta id accusantium a
            consequatur.
          </Text>
          <Text fontFamily="roboto" fontWeight="700" fontSize="2xl" mb={2}>
            $100.00
          </Text>
          <Flex mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <Icon
                  as={GoStar}
                  key={i}
                  color={i < 4 ? "teal.500" : "gray.300"}
                />
              ))}
            <Flex as="span" ml="2" color="gray.600" fontSize="sm">
              {33} reviews
            </Flex>
          </Flex>
          <NumberInput
            defaultValue={1}
            min={1}
            max={20}
            onChange={valueString => setValue(valueString)}
            mb={2}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Flex alignSelf="center" mb={2}>
            <Button mx={1}>Buy Now</Button>
            <Button mx={1}>Add to Cart</Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Product
