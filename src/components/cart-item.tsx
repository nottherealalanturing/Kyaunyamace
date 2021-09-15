import { Image } from "@chakra-ui/react"
import React, { useState } from "react"

export default function CartItem({
  id,
  title,
  oldPrice,
  newPrice,
  imagePath,
  category,
  description,
  quantity,
}) {
  return (
    <Image rounded={"lg"} width={50} objectFit={"contain"} src={imagePath} />
  )
}
