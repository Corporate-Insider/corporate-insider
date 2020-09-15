import React, { useState } from 'react';
import { Tabs, Tab, Container, Button, Modal, Form } from 'react-bootstrap';
import Review from './Review';
import './Insight.css';
import StaticRating from './StaticRating';
import StarRating from './StarRating';

function Insight({ match, companies, fetchCompanies, loggedIn, userId }) {
	const url = `https://corporate-db.herokuapp.com/reviews/`;
	const ratingURL = `https://corporate-db.herokuapp.com/ratings/`;
	const [key, setKey] = useState('insights');
	const [value, setValue] = useState(0);
	const [show, setShow] = useState(false);
	let company;

	companies.forEach((comp) => {
		if (comp.name === match.params.company) {
			company = comp;
		}
	});

	const [newReview, setReview] = useState({
		company_id: company ? company.id : 0,
		review: '',
		user_id: localStorage.getItem('userId'),
	});
	const handleChange = (event) => {
		event.preventDefault();
		setReview({
			company_id: newReview.company_id,
			review: event.target.value,
			user_id: newReview.user_id,
		});
	};

	const handleClose = () => setShow(false);

	const handleShow = () => {
		setReview({
			company_id: company ? company.id : 0,
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
				<Modal.Title className='modalTitle'>Create Review</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group controlId='exampleForm.ControlTextarea1'>
						<Form.Label>New Review</Form.Label>
						<Form.Control
							as='textarea'
							rows='3'
							className='control'
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

	let defaultRating;
	let five = 0;
	let four = 0;
	let three = 0;
	let two = 0;
	let one = 0;
	let rated = false;
	if (company) {
		company.ratings.forEach((rating) => {
			if (rating.rating === 5) {
				five += 1;
			} else if (rating.rating === 4) {
				four += 1;
			} else if (rating.rating === 3) {
				three += 1;
			} else if (rating.rating === 2) {
				two += 1;
			} else if (rating.rating === 1) {
				one += 1;
			}

			if (rating.user_id === parseInt(localStorage.getItem('userId'))) {
				rated = true;
			}
		});
	}
	if (company) {
		defaultRating =
			(5 * five + 4 * four + 3 * three + 2 * two + one) /
			(five + four + three + two + one);
	}

	function handleRateChange(newValue) {
		fetch(ratingURL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				rating: newValue,
				company_id: company.id,
				user_id: localStorage.getItem('userId'),
			}),
		}).then((res) => {
			return fetchCompanies();
		});
	}

	const starRating =
		(loggedIn && rated) || !loggedIn ? (
			<StaticRating defaultRating={defaultRating} />
		) : (
			<StarRating
				value={value}
				setValue={setValue}
				handleRateChange={handleRateChange}
			/>
		);

	return company ? (
		<Container>
			<h1 className='companyInsight'>{company.name}</h1>
			<Tabs
				id='controlled-tab-example'
				activeKey={key}
				onSelect={(k) => setKey(k)}>
				<Tab eventKey='insights' title='Company Insights'>
					<Container>
						<div className='items'>
							{loggedIn && (
								<Button onClick={handleShow} className='newReviewButton'>
									New Review
								</Button>
							)}
							<div className='theStar'>{starRating}</div>
						</div>
						{modal}
						<Container className='reviews'>
							{company.reviews.map((review, index) => {
								return (
									<Review
										review={review}
										userId={userId}
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
