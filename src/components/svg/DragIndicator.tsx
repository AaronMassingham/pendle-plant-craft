import React from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";

const variants = {
	initial: { opacity: 1 },
	animate: {
		opacity: 1,
		transition: {
			staggerChildren: 1,
		},
	},
	hidden: { opacity: 1 },
};

const childVariants = {
	initial: {
		x: 0,
	},
	animate: {
		x: [40, -40],

		zIndex: [0, 5],
		transition: {
			duration: 3,
			repeat: Infinity,
			ease: "linear",
		},
	},
};

const DragIndicator = () => {
	return (
		<>
			<Container
				variants={variants}
				initial="initial"
				animate="animate"
				exit="hidden"
			>
				<motion.div variants={childVariants} />
				<motion.div variants={childVariants} />
				<motion.div variants={childVariants} />
			</Container>
		</>
	);
};

const Test = styled(motion.div)`
	transform: translateX(-10px) translateZ(100px);
`;
const Test2 = styled(motion.div)`
	transform: translateZ(0px);
`;
const Container = styled(motion.div)`
	margin-left: 3rem;
	overflow: clip;
	border-radius: 4px;
	background: ${({ theme }) => theme.colors.brand["100"]};
	border: 2px solid ${({ theme }) => theme.colors.brand["100"]};
	width: 44px;
	height: 39px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	position: relative;
	& > div {
		position: absolute;
		width: 20px;
		height: auto;
		aspect-ratio: 1/1.5;
		background: white;
		border-radius: 2px;
		right: 0;
	}
`;

export default DragIndicator;
