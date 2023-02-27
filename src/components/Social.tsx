import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import { Flex, Box } from "@chakra-ui/react";

import styled from "@emotion/styled";

const Social = () => {
	return (
		<Flexi direction="row" gap={6}>
			<Box>
				<a
					href="https://www.facebook.com/pendleplantcraft"
					target="_blank"
					rel="noopener"
					aria-label="Facebook"
				>
					<FontAwesomeIcon icon={faFacebookF} />
				</a>
			</Box>

			<Box>
				<a
					href="https://www.instagram.com/pendleplantcraft"
					target="_blank"
					rel="noopener"
					aria-label="Instagram"
				>
					<FontAwesomeIcon icon={faInstagram} />
				</a>
			</Box>
			<Box>
				<a
					href="mailto:pendleplantcraft@gmail.com"
					target="_blank"
					rel="noopener"
					aria-label="Email Us"
				>
					<FontAwesomeIcon icon={faEnvelope} />
				</a>
			</Box>
		</Flexi>
	);
};

const Flexi = styled(Flex)`
	svg {
		height: 1rem;
	}
`;

export default Social;
