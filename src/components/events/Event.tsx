import React from "react";
import { Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

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
				{props.title}
				{props.location}
				{props.date}
				{props.time}
			</motion.div>
		</Container>
	);
});

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
		justify-content: center;
		background: white;
		border: 2px solid ${({ theme }) => theme.colors.brand["100"]};
		border-radius: 1rem;
		padding: 3rem 2rem 2rem 2rem;
		text-align: center;
		@media (max-width: 355px) {
			justify-content: flex-start;
		}
		@media (min-width: 768px) {
			align-items: center;
		}
	}
`;

type Props = {
	title: string;
	location: string;
	time: string;
	date: string;
};

export default Event;
