import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import toast from 'react-hot-toast';

import api from '../../api';

const Verify = props => {
	const history = useHistory();

	const [otp, setOTP] = useState();

	useEffect(() => {
		if (!props.location.state) history.push('/');
		// eslint-disable-next-line
	}, []);

	const submitForm = async () => {
		await api
			.post(`/verifyOTP`, { email: localStorage.getItem('email'), OTP: otp })
			.then(res => {
				if (res.status === 200) {
					toast.success('Verified!');
					setTimeout(() => history.push('/thankYou', { status: true }, 3000));
				}
			})
			.catch(() => {
				toast.error('An error occured.');
			});
	};

	return (
		<div style={{ minHeight: '80vh', paddingTop: '5vh' }}>
			<Container className="flex my-5">
				<Row className="flex justify-content-center">
					<Container>
						<center>
							<h3 style={{ paddingBottom: '12vh' }}>Enter the OTP received in the mail</h3>
						</center>
					</Container>
					<Col md="8" lg="6">
						<Form>
							<FormGroup>
								<Label for="otp">OTP</Label>
								<Input
									value={otp}
									onChange={e => setOTP(e.target.value)}
									type="number"
									id="otp"
									name="otp"
									required
									placeholder="Enter the OTP received"
								/>
							</FormGroup>
							<Button onClick={submitForm} color="primary">
								Submit
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Verify;
