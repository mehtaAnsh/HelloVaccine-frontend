import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import moment from 'moment';
import api from '../../api';

const Home = () => {
	const today = moment().format('YYYY-MM-DD'); //get today's date

	const [email, setEmail] = useState('');
	const [pin, setPin] = useState();
	const [date, setDate] = useState(today);

	const history = useHistory();

	const submitForm = async () => {
		if (moment(date).diff(today, 'days') /*diff */ > 7) {
			toast.error('Please select a date in 7 days.');
			return;
		}
		if (pin < 100000 || pin > 999999) {
			toast.error('Please enter a 6-digit pincode.');
			return;
		}
		const formattedDate = moment(date).format('DD-MM-YYYY');

		await api
			.post(`/mail`, { email, pin, date: formattedDate })
			.then(res => {
				if (res.status === 200) {
					localStorage.setItem('email', email);
					toast.success('Submitted! An email has been sent.');
					setTimeout(() => history.push('/verify', { status: true }), 3000);
				}
			})
			.catch(err => {
				console.log(err);
				toast.error('An error occured.');
			});
	};
	return (
		<div style={{ minHeight: '80vh', paddingTop: '5vh' }}>
			<Container className="flex my-5">
				<Row className="flex justify-content-center">
					<Container>
						<center>
							<h3 style={{ paddingBottom: '12vh' }}>
								Enter your email. Get notified every hour for vacancy. It's that easy.
							</h3>
						</center>
					</Container>
					<Col md="8" lg="6">
						<Form>
							<FormGroup>
								<Label for="email">Email</Label>
								<Input
									value={email}
									onChange={e => setEmail(e.target.value)}
									type="email"
									id="email"
									name="email"
									required
									placeholder="Enter your e-mail ID"
								/>
							</FormGroup>
							<FormGroup>
								<Label for="pin">PINCODE</Label>
								<Input
									type="number"
									id="pin"
									name="pin"
									placeholder="Enter a 6-digit pincode"
									value={pin}
									onChange={e => setPin(e.target.value)}
									required
								/>
							</FormGroup>
							<FormGroup>
								<Label for="date">Date</Label>
								<Input
									type="date"
									id="date"
									name="date"
									required
									value={date}
									onChange={e => setDate(e.target.value)}
									placeholder="Enter a date for which you want to check the dates"
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

export default Home;
