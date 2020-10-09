import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
function NewReviewForm({
	show,
	handleClose,
	handleChange,
	newReview,
	handleSubmit,
}) {
	return (
		<Modal show={show} onHide={handleClose} animation={false} className='modal'>
			<Modal.Header closeButton>
				<Modal.Title className='modalTitle navLinks'>Create Review</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group controlId='exampleForm.ControlTextarea1'>
						<Form.Label className='navLinks'>New Review</Form.Label>
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
}

export default NewReviewForm;
