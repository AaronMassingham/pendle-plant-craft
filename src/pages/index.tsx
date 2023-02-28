import Head from "next/head";
import styled from "@emotion/styled";
import { Heading, Text, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

//Components
import Hero from "@components/components/Hero";
import EventPanels from "@components/components/events/EventPanels";
import TextPanel from "@components/components/TextPanel";
import VideoThumb from "@components/components/VideoThumb";
import AnimatedStroke from "@components/components/svg/AnimatedStroke";
import Background from "@components/components/svg/Background";
import DragIndicator from "@components/components/svg/DragIndicator";

export default function Home() {
	return (
		<>
			<Head>
				<title>Pendle Plant Craft</title>
				<meta
					name="description"
					content="We're a community adventuring Pendle, sharing knowledge and our collective understanding of nature."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Hero />
			<EventSection>
				<Background />
				<Box placeSelf={{ md: "center center" }} className="stack">
					<Heading
						py={16}
						as="h2"
						fontSize={{ base: "2xl", lg: "2xl", xl: "3xl" }}
						fontFamily="heading"
						zIndex={5}
					>
						Upcoming Events
					</Heading>
				</Box>
				<Box placeSelf={{ md: "center end" }} width="100%">
					<EventPanels />
				</Box>
				<ColouredPanel />
			</EventSection>
			<TextPanel>
				<Heading
					py={8}
					as="h2"
					fontSize={{ base: "2xl", lg: "3xl", xl: "5xl" }}
					fontFamily="heading"
					maxW={800}
					textAlign="center"
					zIndex={5}
				>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
					>
						Learning together, towards a more symbiotic relationship with our
						surroundings, nature and each other
					</motion.div>
				</Heading>
				<AnimatedStroke />
			</TextPanel>
			<VideoThumb />
			<DragIndicator />
		</>
	);
}

const ColouredPanel = styled.div`
	content: " ";
	height: 95%;
	z-index: -1;
	position: absolute;
	top: 0;
	width: 100%;
	box-shadow: 0 0 0 100vmax ${({ theme }) => theme.colors.brand["100"]};
	background-color: ${({ theme }) => theme.colors.brand["100"]};
	clip-path: inset(0 -100vmax);
`;
const EventSection = styled(Box)`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
`;
