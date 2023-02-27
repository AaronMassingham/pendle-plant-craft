import React from "react";
import styled from "@emotion/styled";
import { Box } from "@chakra-ui/react";

//Components
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: Props) => {
	return (
		<>
			<Header />
			<Main>{children}</Main>
			<Footer />
		</>
	);
};

interface Props {
	children?: React.ReactNode;
}

const Main = styled(Box)``;

export default Layout;
// px={{ base: 8, md: 16, lg: 36 }}
