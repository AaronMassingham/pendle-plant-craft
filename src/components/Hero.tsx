import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { Flex, Box, Button, Heading, Text } from "@chakra-ui/react";

const Hero = () => {
	return (
		<Grid h={{ base: "calc(100vh - 56px)", md: "100vh" }} pt={24}>
			<Box
				mt={{ base: 0, md: "-10rem" }}
				backgroundColor={{ base: "white", md: "transparent" }}
				className="constrain"
				h={{ base: "40vh", md: "max-content" }}
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
					<Button variant="outline" size={{ base: "sm", md: "lg" }}>
						Our Community
					</Button>
					<Button size={{ base: "sm", md: "lg" }}>Events</Button>
				</Box>
			</Box>
			<_Box
				w="100%"
				mr={{ md: "-50%" }}
				h={{ base: "45vh", md: "100%" }}
				position="relative"
				placeSelf={{ base: "end end", md: "center end" }}
			>
				<Image
					src="/hero-image.webp"
					alt="PPC video thumbnail"
					placeholder="empty"
					quality={90}
					priority
					fill
				/>
			</_Box>
		</Grid>
	);
};

const _Box = styled(Box)`
	img {
		object-fit: cover;
		@media screen and (min-width: 768px) {
			border-radius: 1rem 0 0 0;
		}
	}
`;
const WhiteSpace = styled.span`
	padding: 0.5rem 0;
	border: none;
	@media screen and (min-width: 768px) {
		background-color: #fff;
		box-shadow: 0.5rem 0 0 #fff, -0.5rem 0 0 #fff;
		line-height: 1.6;
	}
	@media screen and (min-width: 960px) {
		line-height: 1.5;
	}
	@media screen and (min-width: 1200px) {
		line-height: 1.4;
	}
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
