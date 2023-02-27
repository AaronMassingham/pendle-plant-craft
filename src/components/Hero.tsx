import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { Flex, Box, Button, Heading, Text } from "@chakra-ui/react";

const Hero = () => {
	return (
		<Grid h="100vh" pt={24}>
			<Box
				backgroundColor={{ base: "white", md: "transparent" }}
				className="constrain"
				h={{ base: "45vh", md: "max-content" }}
				mb={{ md: 20 }}
				mt={{ base: 10 }}
				zIndex={5}
				maxW={{ base: "100%", md: "65%" }}
				placeSelf={{ base: "start start", md: "center start" }}
				display={{ base: "flex" }}
				flexDirection={{ base: "column" }}
				justifyContent={{ base: "center" }}
			>
				<CustomHeading fontSize={{ base: "2xl", lg: "4xl", xl: "5xl" }}>
					<Text
						fontFamily="body"
						fontSize={{ base: "md", md: "lg" }}
						mb={3}
						fontWeight={400}
					>
						Hello! &#128075;
					</Text>
					<WhiteSpace>
						We're a community adventuring Pendle, sharing knowledge and our
						collective understanding of nature.
					</WhiteSpace>
				</CustomHeading>

				<Box as={Flex} gap={4} mt={8}>
					<Button
						borderColor="brand.500"
						variant="outline"
						borderRadius={32}
						borderWidth={2}
						fontSize="sm"
					>
						Our Community
					</Button>
					<Button
						background="brand.500"
						color="white"
						variant="solid"
						borderRadius={32}
						fontSize="sm"
					>
						Events
					</Button>
				</Box>
			</Box>
			<Box
				w="100%"
				mr={{ md: "-50%" }}
				h={{ base: "40vh", md: "fill-available" }}
				position="relative"
				placeSelf={{ base: "end end", md: "center end" }}
			>
				<Image
					src="/hero-image.webp"
					alt="PPC video thumbnail"
					placeholder="empty"
					quality={50}
					priority
					fill
					style={{ objectFit: "cover" }}
				/>
			</Box>
		</Grid>
	);
};

const WhiteSpace = styled.span`
	background-color: #fff;

	box-shadow: 0.5rem 0 0 #fff, -0.5rem 0 0 #fff;
	padding: 0.5rem 0;
	line-height: 1.5;
	border: none;
`;
const CustomHeading = styled(Heading)`
	white-space: pre-wrap;
`;

const Grid = styled(Box)`
	position: relative;
	z-index: 5;
	display: grid;
	width: 100%;
	& > * {
		grid-column: 1 / -1;
		grid-row: 1 / -1;
	}
`;

export default Hero;
