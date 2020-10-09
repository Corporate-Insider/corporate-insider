import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
function EditReviewForm({
	show,
	handleClose,
	handleChangeOnEdit,
	edited,
	handleEdit,
}) {
	return (
		<Modal
			show={show}
			onHide={handleClose}
			animation={false}
			className='editmodal'>
			<Modal.Header closeButton>
				<Modal.Title className='modalTitle navLinks'>Edit Review</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group controlId='exampleForm.ControlTextarea1'>
						<Form.Label className='navLinks'>Update Review</Form.Label>
						<Form.Control
							as='textarea'
							className='control'
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
}

export default EditReviewForm;
