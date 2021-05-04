import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { Col, Container, Row } from 'reactstrap';
import img from './img.jpg';

const ThankYou = props => {
	const history = useHistory();

	useEffect(() => {
		if (!props.location.state) history.push('/');
		// eslint-disable-next-line
	}, []);
	return (
		<div style={{ minHeight: '80vh', paddingTop: '5vh' }}>
			<Container>
				<Row className="flex justify-content-center">
					<img src={img} alt="placeholder-image" style={{ maxHeight: '30vh' }} />
				</Row>
				<Row className="flex justify-content-center">
					<Col md="9">
						<h3 style={{ textAlign: 'center', marginTop: '10vh' }}>
							Thank you for subscribing.
							<br /> Check your email for notifications. <br />
							Also, share on WhatsApp via the icon above.
						</h3>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default ThankYou;
