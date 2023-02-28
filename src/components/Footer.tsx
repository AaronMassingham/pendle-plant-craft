import React from "react";
import styled from "@emotion/styled";
import { Box, Flex, Heading, Text, Button, Grid } from "@chakra-ui/react";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Components
import Copyright from "./Copyright";
import Social from "./Social";
import Logo from "./svg/Logo";

const Footer = () => {
	return (
		<>
			<Container
				mt={16}
				py={16}
				minH={{ base: "unset", md: "500px" }}
				bg="brown.500"
				direction="row"
				gap={16}
				justifyContent="space-between"
				alignItems="center"
				className="constrain"
			>
				<Box width={{ base: "100%", lg: "50%" }}>
					<Flex
						direction={{ base: "column", md: "row", lg: "column" }}
						justifyContent="space-between"
						gap={16}
					>
						<Box color="brand.100" className="stack">
							<Heading as="h3" fontSize={{ base: "lg", lg: "xl", xl: "3xl" }}>
								Join our community!
							</Heading>
							<Text>
								We're a growing community of pro nature people driven by the
								ethos that sharing our collective knowledge of nature, fungi,
								plants, cultivation, and understanding of mental wellbeing can
								have a huge impact on individuals and our local community.
							</Text>
							<Button size={{ base: "sm", md: "lg" }}>
								<Icon>
									<FontAwesomeIcon icon={faFacebookF} />
								</Icon>{" "}
								Our Community
							</Button>
						</Box>
						<Box color="brand.100" className="stack">
							<Heading as="h3" fontSize={{ base: "lg", lg: "xl", xl: "3xl" }}>
								Get in touch
							</Heading>
							<Text>
								Whether you're interested in getting stuck in with us or would
								like to know about what we do then please don't hesitate to
								reach out.
							</Text>
							<Social />
						</Box>
					</Flex>
				</Box>
				<Grid
					display={{ base: "none", lg: "grid" }}
					px={{ base: 8, md: 16, lg: 24 }}
					width={{ base: "100%", md: "50%" }}
					maxW={500}
					opacity={0.2}
					placeItems="center"
				>
					<Logo invertColor fillSpace />
				</Grid>
			</Container>
			<Copyright />
		</>
	);
};

const Container = styled(Flex)``;
const Icon = styled.span`
	svg {
		height: 1rem;
		margin-right: 0.5rem;
	}
`;

export default Footer;
