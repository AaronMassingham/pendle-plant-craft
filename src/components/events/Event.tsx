import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLocationDot,
	faCalendar,
	faClock,
} from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line react/display-name
const Event = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	return (
		<Container ref={ref}>
			<motion.div
				initial={{ opacity: 0.25, scale: 0.95 }}
				whileInView={{ opacity: 1, scale: 1 }}
				viewport={{ amount: 0.8 }}
				transition={{
					duration: 0.35,
					ease: "easeInOut",
				}}
			>
				<Heading as="h3" fontSize={{ base: "lg" }}>
					{props.title}
				</Heading>
				<Box w="100%" fontSize="sm">
					<Icon>
						<FontAwesomeIcon icon={faLocationDot} /> {props.location}
					</Icon>
					<Flex pt={4}>
						<Icon>
							<FontAwesomeIcon icon={faCalendar} /> {props.date}
						</Icon>
						<Icon>
							<FontAwesomeIcon icon={faClock} /> {props.time}
						</Icon>
					</Flex>
				</Box>
			</motion.div>
		</Container>
	);
});

const Icon = styled.div`
	display: flex;
	margin-right: 1rem;
	svg {
		width: 0.75rem;
		margin-right: 0.5rem;
		color: ${({ theme }) => theme.colors.brand["500"]};
	}
`;
const Container = styled.div`
	flex: 0 0 350px;
	height: 100%;
	position: relative;

	&:first-of-type {
		padding-left: 0;
	}
	& > div {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background: white;
		border: 2px solid ${({ theme }) => theme.colors.brand["100"]};
		border-radius: 1rem;
		padding: 3rem 2rem 2rem 2rem;
	}
`;

type Props = {
	title: string;
	location: string;
	time: string;
	date: string;
};

export default Event;
