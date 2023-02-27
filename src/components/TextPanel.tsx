import React from "react";
import styled from "@emotion/styled";

const TextPanel = ({ children }: Props) => {
	return <Container className="constrain">{children}</Container>;
};

type Props = {
	children: React.ReactNode;
};

const Container = styled.div`
	display: grid;
	min-height: 75vh;
	place-items: center;
	& > * {
		grid-column: 1 / -1;
		grid-row: 1 / -1;
	}
	@media screen and (min-width: 768px) {
		min-height: 90vh;
	}
`;

export default TextPanel;
