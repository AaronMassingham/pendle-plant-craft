import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import styled from "@emotion/styled";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const Copyright = () => {
	return (
		<Flex
			direction="row"
			justifyContent="space-between"
			py={8}
			background="brown.100"
			fontSize={12}
			color="brand.100"
			className="constrain"
		>
			<CustomBox>
				Made with
				<FontAwesomeIcon icon={faHeart} />
				<a
					href="https://www.facebook.com/arnmMultimedia/"
					target="_blank"
					rel="noopener"
					aria-label="ARNM"
				>
					ARNM
				</a>
			</CustomBox>
			<Box>&copy; 2023 Pendle Plant Craft</Box>
		</Flex>
	);
};

const CustomBox = styled(Flex)`
	svg {
		width: 1rem;
		margin: 0 0.5rem;
	}
`;

export default Copyright;
