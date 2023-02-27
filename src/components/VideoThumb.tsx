import React, { useState } from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { Flex, Heading, Text, Box } from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";

import CtaSpinner from "./svg/CtaSpinner";

const VideoThumb = () => {
	const [modal, setModal] = useState();
	return (
		<>
			<Container
				minH={{ base: "75vh", md: 500 }}
				direction={{ base: "column-reverse", md: "row" }}
				gap={{ base: 8, md: 16 }}
				className="constrain"
			>
				<Thumbnail
					h={500}
					w={{ base: "100%" }}
					justifyContent="center"
					alignItems="center"
				>
					<CustomBox width={200} height={200} color="green.100">
						<CtaSpinner>
							<a
								href="https://www.facebook.com/pendleplantcraft/videos/582968223720561/"
								target="_blank"
								rel="noopener"
								aria-label="Watch our video (opens in an external link)"
							>
								<FontAwesomeIcon icon={faPlayCircle} />
							</a>
						</CtaSpinner>
					</CustomBox>
					<Image
						src="/video-thumb.webp"
						alt="PPC video thumbnail"
						placeholder="empty"
						quality={50}
						priority
						fill
						style={{ objectFit: "cover", borderRadius: "1rem" }}
					/>
				</Thumbnail>
				<Flex
					flex={{ md: 1 }}
					direction="column"
					justifyContent="center"
					className="stack"
				>
					<Heading as="h3" fontSize={{ base: "lg", lg: "xl", xl: "3xl" }}>
						Watch our video.
					</Heading>
					<Text>
						We're a growing community of pro nature people driven by the ethos
						that sharing our collective knowledge of nature, fungi, plants,
						cultivation, and understanding of mental wellbeing can have a huge
						impact on individuals and our local community.
					</Text>
				</Flex>
			</Container>
		</>
	);
};

const Container = styled(Flex)``;
const CustomBox = styled(Box)`
	& a {
		display: block;
		transition: all 0.2s ease;
		transform-origin: center center;
	}
	& a:hover {
		transform: scale(1.2);
	}
`;

const Thumbnail = styled(Flex)`
	position: relative;
	flex: 1;
	border-radius: 1rem;

	& img {
		height: 100%;
	}
`;

export default VideoThumb;
