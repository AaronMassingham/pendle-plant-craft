import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    useSystemColorMode: false,
    colors: {
      brand: {
        100: "#dceadc",
        500: "#4b7a4b",
      },
      grey: {
        500: "#2b2b2b",
      },
      brown: {
        100: "#332d2b",
        500: "#2b2722",
      }
    },
    fonts: {
        heading: `"Fjalla One", sans-serif;`,
        body: `'Open Sans', sans-serif`
    },
    components: {
    Button: {
      baseStyle: {
        fontWeight: 400,
        p:6 
      },
    }
  }
  })


type Theme = typeof theme;

export type { Theme };

export default theme;