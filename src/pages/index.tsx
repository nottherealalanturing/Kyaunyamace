import {
  Container,
  Text,
  Divider,
  Box,
  Image,
  Button,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react"

import { FiSearch } from "@react-icons/all-files/fi/FiSearch"
import { FiShoppingBag } from "@react-icons/all-files/fi/FiShoppingBag"
import { useState, useEffect } from "react"
import Item from "../components/item"
import React from "react"
import Footer from "../components/footer"
import { graphql } from "gatsby"
import { useSelector } from "react-redux"

function Shop({ data }) {
  const products = useSelector((state: any) => state.shop.products)
  const cart = useSelector((state: any) => state.shop.cart)

  return (
    <>
      <Container maxW="container.xl" h="100vh">
        <Flex
          justifyContent="center"
          alignContent="center"
          px={[2, 8, 16, 32]}
          my={4}
        >
          <Text
            as="a"
            href="/"
            fontSize="md"
            color="gray.900"
            fontFamily="overlock"
            fontWeight="700"
          >
            OUR PRODUCTS
          </Text>
        </Flex>
        <Divider />
        <Box mt={4}>
          <SimpleGrid
            minChildWidth="300px"
            align="center"
            justify="center"
            spacing="40px"
            mb={32}
          >
            {products.map((product, index) => (
              <Item
                id={product.id}
                title={product.title}
                oldPrice={product.oldPrice}
                newPrice={product.newPrice}
                imagePath={product.imagePath}
                category={product.category}
                description={product.description}
                key={index}
              />
            ))}
          </SimpleGrid>
          <Footer />
        </Box>
      </Container>
    </>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          oldPrice
          newPrice
          imagePath
          category
        }
        html
      }
    }
  }
`

export default Shop
