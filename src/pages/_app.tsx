import "@components/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/index";

//Fonts
import "@fontsource/fjalla-one";
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/500.css";

//Components
import Layout from "@components/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ChakraProvider>
	);
}
