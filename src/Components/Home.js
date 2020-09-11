import React, { useState, useEffect } from 'react';
import { Image, Card, Container } from 'react-bootstrap';
import './Home.css';
import { Link } from 'react-router-dom';
import Search from './Search';

function Home({ companies, fetchCompanies }) {
	let cards = companies.map((company, index) => {
		return (
			<Card key={index} className='mainCard'>
				<Link to={`insight/${company.name}`}>
					<Image src={company.logo} className='companyLogo' />
				</Link>
				<Link to={`insight/${company.name}`} className='companyName'>
					<h5>{company.name}</h5>
				</Link>
			</Card>
		);
	});
	return (
		<div>
			<Search companies={companies} fetchCompanies={fetchCompanies} />
			<Container className='homeContainer'>{cards}</Container>
		</div>
	);
}

export default Home;
