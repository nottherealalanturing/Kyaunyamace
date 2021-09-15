import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"
import { StepsStyleConfig as Steps } from "chakra-ui-steps"

const breakpoints = createBreakpoints({
  sm: "320px",
  md: "481px",
  lg: "769px",
  xl: "992px",
  "2xl": "1201px",
})

const theme = extendTheme({
  /*  styles,
  config, */
  breakpoints,
  /* fonts: {
    heading: "overlock",
    body: "montserrat",
  }, */
  components: {
    Button: {
      baseStyle: {
        _focus: {},
      },
    },
    Link: {
      baseStyle: {
        textDecoration: "none",
      },
    },
    Steps,
  },
})

export default theme
