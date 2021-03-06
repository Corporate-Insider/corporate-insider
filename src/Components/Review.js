import React, { useState } from 'react';
import { Row, Col} from 'react-bootstrap';
import './Review.css';
import EditReviewForm from './EditReviewForm';
import Delete from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
const key = process.env.REACT_APP_MYAPI_KEY;
function Review({ review, fetchCompanies, companyId, loggedIn, userId }) {
	const url = `https://corporate-db.herokuapp.com/reviews/${review.id}/${key}`;

	const [edited, setEdited] = useState({
		company_id: companyId,
		rated: review.rated,
		rating: review.rating,
		review: review.review,
		user_id: userId,
	});
	const handleChangeOnEdit = (event) => {
		event.preventDefault();
		setEdited({
			company_id: companyId,
			id: review.id,
			review: event.target.value,
			user_id: userId,
		});
	};
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => {
		setEdited({
			company_id: companyId,
			id:review.id,
			review: review.review,
			user_id: userId,
		});
		setShow(true);
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
				user_id: userId,
			});
			return fetchCompanies();
		});
		console.log(edited)
	};

	const handleDelete = () => {
		fetch(url, {
			method: 'DELETE',
		})
			.then(() => {
				return fetchCompanies();
			})
			.catch(console.error);
	};
	let editDelete =
		loggedIn && parseInt(userId) === review['user_id'] ? (
			<Col>
				<EditIcon onClick={handleShow} /> <Delete onClick={handleDelete} />
			</Col>
		) : (
			''
		);

	return (
		<Row border='light' className='reviewCard'>
			<EditReviewForm
				show={show}
				handleClose={handleClose}
				handleChangeOnEdit={handleChangeOnEdit}
				edited={edited}
				handleEdit={handleEdit}
			/>
			<div className='uiIcons'>{editDelete}</div>
			<p className='text'>{review.review}</p>
		</Row>
	);
}

export default Review;
