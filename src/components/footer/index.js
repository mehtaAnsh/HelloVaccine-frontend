import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { GiEternalLove } from 'react-icons/gi';

const Footer = () => {
	return (
		<Container>
			<Row className="flex align-items-center justify-content-center">
				<Col md="6">
					<center>
						<h5>
							Made with <GiEternalLove /> by Ansh Mehta
						</h5>
					</center>
				</Col>
			</Row>
		</Container>
	);
};

export default Footer;
