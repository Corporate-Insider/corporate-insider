import React, { useState } from 'react';
import { Form, Row, Col, Button, ListGroup } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Search.css';
function Search({ companies }) {
	const [search, setSearch] = useState('');
	const [submitted, setSubmitted] = useState(false);
	let found = false

	function handleInputChange(event) {
		event.preventDefault();
		setSearch(event.target.value);
		setSubmitted(false);
		found = false;
	}

	function handleSubmit(event) {
		event.preventDefault();
        setSubmitted(true);
        //check if found is true
        // if it is false, display a message that asks them if they want to add that company, if yes; make a request to clear bit, add that company, fetchCompanies, redirect them to the page of that company they created 
	}

	let matchedCompanies;
	let filteredCompanies;

	if (!submitted) {
		filteredCompanies = companies.filter((company) => {
			if (
				company.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 &&
				search &&
				company.name.toLowerCase().charAt(0) === search.toLowerCase().charAt(0)
			) {
				found = true;
			}

			return (
				company.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 &&
				search &&
				company.name.toLowerCase().charAt(0) === search.toLowerCase().charAt(0)
			);
		});
    }
    matchedCompanies = filteredCompanies ?  filteredCompanies.map((company, index)=>{
    return (
			<ListGroup.Item key={index}>
				<Link to={`insight/${company.name}`}>{company.name}</Link>
			</ListGroup.Item>
		);
    }): '';
	return (
		<div>
			<Row>
				<Form onSubmit={handleSubmit} className='searchForm'>
					<Row>
						<Form.Group className='searchInput'>
							<Form.Control
								size='sm'
								placeholder='Search by company name'
								type='text'
								name='searchString'
								onChange={handleInputChange}
								value={search}
							/>
						</Form.Group>

						<Button
							type='submit'
							variant='dark'
							className='btn-sm btn searchButton'>
							Search
						</Button>
					</Row>
				</Form>
				<ListGroup className='dropDown'>{matchedCompanies}</ListGroup>
			</Row>
		</div>
	);
}

export default Search;
