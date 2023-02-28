import { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { Heading, Flex } from "@chakra-ui/react";
import {
	motion,
	useMotionValue,
	useDragControls,
	useSpring,
} from "framer-motion";

//Components
import Event from "@components/components/events/Event";

// Test array for content data
const eventsData = [
	{
		title: "Community Walk",
		date: "19th Feb 2023",
		time: "10.00am",
		location: "Gisburn Forest",
	},
	{
		title: "Community Walk",
		date: "19th Feb 2023",
		time: "10.00am",
		location: "Gisburn Forest",
	},
	{
		title: "Community Walk",
		date: "19th Feb 2023",
		time: "10.00am",
		location: "Gisburn Forest",
	},
	{
		title: "Community Walk",
		date: "19th Feb 2023",
		time: "10.00am",
		location: "Gisburn Forest",
	},
	{
		title: "Community Walk",
		date: "19th Feb 2023",
		time: "10.00am",
		location: "Gisburn Forest",
	},
	{
		title: "Community Walk",
		date: "19th Feb 2023",
		time: "10.00am",
		location: "Gisburn Forest",
	},
];

const EventPanels = () => {
	//Set refs
	const constraintsRef = useRef(null);
	const ref = useRef<HTMLInputElement>(null);

	//UseState
	const [width, setWidth] = useState(0);

	//Needs on resize event listener
	useEffect(() => {
		if (ref.current != null) {
			setWidth(ref.current.offsetWidth);
		}
	}, []);

	//Calculate width of Overflow Container based on number of Review Panels
	// const calcWidth = width * eventsData.length + eventsData.length * 40 + 350;
	const calcWidth = width * eventsData.length + eventsData.length * 40;

	const [inputValue, setInputValue] = useState(0);

	const controls = useDragControls();

	const x = useMotionValue(inputValue);
	useSpring(x, { stiffness: 9000, damping: 10 });
	return (
		<Section>
			<Container ref={constraintsRef}>
				<OverflowContainer
					drag="x"
					dragConstraints={constraintsRef}
					style={{ width: calcWidth, x: x }}
					dragControls={controls}
					//dragTransition={{ bounceStiffness: 600, bounceDamping: 100 }}
					dragElastic={0.1}
				>
					{eventsData.map((item, index) => (
						<Event
							key={index}
							ref={ref}
							title={item.title}
							date={item.date}
							time={item.time}
							location={item.location}
						/>
					))}
				</OverflowContainer>
			</Container>
		</Section>
	);
};

const Section = styled(Flex)`
	overflow-x: hidden;
`;
const Container = styled.div`
	position: relative;
	height: 400px;
	overflow-x: hidden;
`;
const OverflowContainer = styled(motion.div)`
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	cursor: grab;
	gap: 32px;
	& > div:first-of-type {
		margin-left: 32px;
	}
	& > div:last-of-type {
		margin-right: 32px;
	}
`;

export default EventPanels;
