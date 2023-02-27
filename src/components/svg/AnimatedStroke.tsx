import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const AnimatedStroke = () => {
	const strokeAnimation = {
		hidden: {},
		visible: {},
	};
	const child = {
		hidden: {
			pathLength: 0,
			opacity: 1,
			stroke: "red",
		},
		visible: {
			pathLength: 1,
			opacity: [1, 0.2],
			stroke: ["red", "green"],
			transition: {
				pathLength: {
					duration: 0.75,
					ease: [0.14, 0.19, 0.52, 1],
				},
				opacity: {
					duration: 1,
					delay: 0.5,
				},
			},
		},
	};
	return (
		<Container
			variants={strokeAnimation}
			initial="hidden"
			whileInView="visible"
		>
			<svg viewBox="0 0 330 330">
				<motion.path
					variants={child}
					//vectorEffect="non-scaling-stroke"

					d="M165,3.7c89.6,0,162.3,72.7,162.3,162.3S254.6,328.3,165,328.3S2.7,255.6,2.7,166S75.4,3.7,165,3.7"
				/>
				{/* <circle cx="165" cy="164" r="162.3" fill="#FFF" /> */}
				<circle cx="165" cy="156.1" r="154.2" fill="#FFF" />
			</svg>
		</Container>
	);
};

const Container = styled(motion.div)`
	max-height: 300px;
	height: 65%;
	aspect-ratio: 1/1;

	& svg path {
		fill: none;
		stroke-miterlimit: 10;
		stroke-width: 1;
	}

	@media (min-width: 768px) {
		max-height: 500px;
		height: 65%;
	}
`;

export default AnimatedStroke;
