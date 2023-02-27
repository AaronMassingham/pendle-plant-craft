import React from "react";
import styled from "@emotion/styled";

import { Flex, Box } from "@chakra-ui/react";

//Components
import Social from "./Social";
import Logo from "./svg/Logo";

const Header = () => {
	return (
		<_Flex
			as="header"
			direction="row"
			justifyContent="space-between"
			alignItems="center"
			px={8}
			h={24}
			bg="white"
		>
			<Logo />
			<Social />
		</_Flex>
	);
};

const _Flex = styled(Flex)`
	position: fixed;
	z-index: 10;
	top: 0;
	left: 0;
	right: 0;
`;

export default Header;
