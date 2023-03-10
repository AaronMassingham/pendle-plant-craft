import React from "react";
import styled from "@emotion/styled";

const Modal = ({ children, setModalToggle }: Props) => {
	return (
		<ModalContainer>
			<button onClick={() => setModalToggle(false)}>Close</button>
			<div>{children}</div>
		</ModalContainer>
	);
};

type Props = {
	children: React.ReactNode;
	setModalToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalContainer = styled.div`
	position: absolute;
	z-index: 20;
	background: black;
	color: white;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	padding: var(--headerH) 2rem 0 2rem;
`;

export default Modal;
