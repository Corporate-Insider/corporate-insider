import React, { useState } from 'react';
import { Tabs, Tab, Container, Button, Modal, Form } from 'react-bootstrap';
import Review from './Review';
import './Insight.css';
function Insight({ match, companies, fetchCompanies, loggedIn }) {
	const url = `http://localhost:8000/reviews/`;
	const [key, setKey] = useState('insights');

	let company;

	companies.forEach((comp) => {
		if (comp.name === match.params.company) {
			company = comp;
		}
	});

	const [newReview, setReview] = useState({
		company_id: company ? company.id : 0,
		rated: false,
		rating: 0,
		review: '',
		user_id: localStorage.getItem('userId'),
	});
	const handleChange = (event) => {
		event.preventDefault();
		setReview({
			company_id: newReview.company_id,
			rated: false,
			rating: 0,
			review: event.target.value,
			user_id: newReview.user_id,
		});
	};
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);

	const handleShow = () => {
		setReview({
			company_id: company ? company.id : 0,
			rated: false,
			rating: 0,
			review: '',
			user_id: localStorage.getItem('userId'),
		});
		setShow(true);
	};
	function handleSubmit(event) {
		event.preventDefault();
		handleClose();
		fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newReview),
		}).then(() => {
			return fetchCompanies();
		});
	}
	//modal for new review
	const modal = (
		<Modal show={show} onHide={handleClose} animation={false} className='modal'>
			<Modal.Header closeButton>
				<Modal.Title>Create Review</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group controlId='exampleForm.ControlTextarea1'>
						<Form.Label>New Review</Form.Label>
						<Form.Control
							as='textarea'
							rows='3'
							onChange={handleChange}
							value={newReview.review}
						/>
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant='secondary' onClick={handleClose}>
					Close
				</Button>
				<Button variant='primary' onClick={handleSubmit}>
					Submit
				</Button>
			</Modal.Footer>
		</Modal>
	);

	return company ? (
		<Container>
			<h1>{company.name}</h1>
			<Tabs
				id='controlled-tab-example'
				activeKey={key}
				onSelect={(k) => setKey(k)}>
				<Tab eventKey='insights' title='Company Insights'>
					<h2>Insight Page</h2>
					<Container>
						<Button onClick={handleShow}>New Review</Button>
						{modal}
						<Container className='reviews'>
							{company.reviews.map((review, index) => {
								return (
									<Review
										review={review}
										fetchCompanies={fetchCompanies}
										index={index}
										key={index}
										loggedIn={loggedIn}
										companyId={company.id}
									/>
								);
							})}
						</Container>
					</Container>
				</Tab>
			</Tabs>
		</Container>
	) : (
		<></>
	);
}

export default Insight;
