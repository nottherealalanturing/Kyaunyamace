import React from "react"
import Product from "../components/product"

const ProductList = () => {
  return (
    <Product
      discount="5%"
      inStock="1"
      name="Duck"
      newPrice="100"
      oldPrice="150"
    />
  )
}

export default ProductList
