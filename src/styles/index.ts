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
          
          borderRadius:32
        },
        sizes: {
          sm: {
            p:5,
            fontSize: 'sm',
          },
          lg: {
            p:6,
            fontSize: 'md',
          },
        },
        variants: {
          outline: {
            border: '2px solid',
            borderColor: 'brand.500',
            color: 'brand.500',
            _hover: {
              bg: 'brand.500',
              color: '#FFF',
            },
          },
          solid: {
            bg: 'brand.500',
            color: '#FFF',
            border: '2px solid',
            borderColor: 'brand.500',
            _hover: {
              bg: 'transparent',
              color: 'brand.500',
              border: '2px solid',
              borderColor: 'brand.500',
            },
          },
        },
      },
    },
  })


type Theme = typeof theme;

export type { Theme };

export default theme;