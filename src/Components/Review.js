import React, { useState } from 'react';
import { Row, Col, Modal, Button, Form } from 'react-bootstrap';
import './Review.css';
import Delete from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

function Review({ review, fetchCompanies, companyId }) {
	const url = `http://localhost:8000/reviews/${review.id}`;

	const [edited, setEdited] = useState({
		company_id: companyId,
		rated: review.rated,
		rating: review.rating,
		review: review.review,
		user_id: localStorage.getItem('userId'),
	});
	const handleChangeOnEdit = (event) => {
		event.preventDefault();
		setEdited({
			company_id: companyId,
			rated: review.rated,
			rating: review.rating,
			review: event.target.value,
			user_id: localStorage.getItem('userId'),
		});
	};
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => {
        setEdited({
					company_id: companyId,
					rated: review.rated,
					rating: review.rating,
					review: review.review,
					user_id: localStorage.getItem('userId'),
				});
        setShow(true)
    };
	const handleEdit = (event) => {
		event.preventDefault();
		handleClose();
		fetch(url, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(edited),
		}).then(() => {
			setEdited({
				company_id: companyId,
				rated: review.rated,
				rating: review.rating,
				review: review.review,
				user_id: localStorage.getItem('userId'),
			});
			return fetchCompanies();
		});
	};
	const editModal = (
		<Modal show={show} onHide={handleClose} animation={false} className='modal'>
			<Modal.Header closeButton>
				<Modal.Title>Edit Review</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group controlId='exampleForm.ControlTextarea1'>
						<Form.Label>Update Review</Form.Label>
						<Form.Control
							as='textarea'
							rows='3'
							onChange={handleChangeOnEdit}
							value={edited.review}
						/>
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant='secondary' onClick={handleClose}>
					Close
				</Button>
				<Button variant='primary' onClick={handleEdit}>
					Save
				</Button>
			</Modal.Footer>
		</Modal>
	);

	const handleDelete = () => {
		fetch(url, {
			method: 'DELETE',
		})
			.then(() => {
				return fetchCompanies();
			})
			.catch(console.error);
	};
	let editDelete = (
		<Col>
			<EditIcon onClick={handleShow} /> <Delete onClick={handleDelete} />
		</Col>
	);
	return (
		<Row border='light' className='reviewCard'>
			{editModal}
			<div className='uiIcons'>{editDelete}</div>
			<p className='text'>{review.review}</p>
		</Row>
	);
}

export default Review;
