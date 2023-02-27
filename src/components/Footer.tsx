import React from "react";
import styled from "@emotion/styled";
import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Components
import Copyright from "./Copyright";
import Social from "./Social";

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
				className="constrain"
			>
				<Box width={{ base: "100%", md: "50%" }}>
					<Flex direction="column" justifyContent="space-between" gap={16}>
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
							<Button
								bg="brand.500"
								variant="solid"
								fontSize="sm"
								borderRadius={32}
								p={4}
							>
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
				<Box
					display={{ base: "none", md: "block" }}
					px={{ base: 8, md: 16, lg: 24 }}
					width={{ base: "100%", md: "50%" }}
					bg="red"
				>
					Image
				</Box>
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
