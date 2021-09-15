import React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import theme from "./theme"
import Layout from "./src/components/layout"
import "@fontsource/montserrat"
import "@fontsource/overlock"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "@fontsource/roboto"
import { Provider } from "react-redux"
import { store } from "./src/store/store/store"

export const wrapPageElement = ({ element }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Provider store={store}>
        <Layout location={element.props.location}>{element}</Layout>
      </Provider>
    </ChakraProvider>
  )
}
