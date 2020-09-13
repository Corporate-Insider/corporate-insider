import React, { useState } from 'react';
import { Form, Row, Col, Button, ListGroup } from 'react-bootstrap';
import {Link, Redirect} from 'react-router-dom';
import './Search.css';
const clearbitURL = `https://autocomplete.clearbit.com/v1/companies/suggest?query=`;
const url = 'http://localhost:8000/companies/';
function Search({ companies, fetchCompanies, loggedIn }) {
	const [search, setSearch] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [redirectRoute, setRedirectRoute] = useState('')
	let found = false;
	let clearbitResult = [];

	function handleInputChange(event) {
		event.preventDefault();
		setSearch(event.target.value);
		setSubmitted(false);
    }
    
	const createCompany = (event, company) => {
		event.preventDefault();
		//make a post request
		fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(company),
		}).then(res => res.json()).then((res) => {
            console.log(res);
            fetchCompanies();
            setRedirectRoute(`/insight/${company.name}`);
            return <Redirect to={redirectRoute} />;
		});
	
	};
	const [fetched, setFetched] = useState('');
	function handleSubmit(event) {
		event.preventDefault();
		setSubmitted(true);
		if (!found) {
			fetch(clearbitURL + search)
				.then((res) => res.json())
				.then((res) => {
					console.log(res);
					clearbitResult = res.map((company, index) => {
						return (
							<ListGroup.Item
								key={index}
								onClick={(e) => createCompany(e, company)}>
								{company.name}
							</ListGroup.Item>
						);
					});
					setFetched(clearbitResult);
				});
		}
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
	matchedCompanies = filteredCompanies
		? filteredCompanies.map((company, index) => {
				return (
					<ListGroup.Item key={index}>
						<Link to={`insight/${company.name}`}>{company.name}</Link>
					</ListGroup.Item>
				);
		  })
		: fetched;

	return (
		<div>
			<Row>
				<Form onSubmit={handleSubmit} className='searchForm'>
					<Row>
						<Form.Group className='searchInput'>
							<Form.Control
								size='sm'
								className='searchControl'
								placeholder='Search by company name'
								type='text'
								name='searchString'
								onChange={handleInputChange}
								value={search}
							/>
						</Form.Group>

						{loggedIn && (
							<Button
								type='submit'
								variant='dark'
								className='btn-sm btn searchButton'>
								Search
							</Button>
						)}
					</Row>
				</Form>
				<ListGroup className='dropDown'>{matchedCompanies}</ListGroup>
			</Row>
		</div>
	);
}

export default Search;
