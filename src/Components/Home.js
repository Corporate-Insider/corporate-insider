import React, { useState, useEffect } from 'react';
import { Image, Card, Container } from 'react-bootstrap';
import './Home.css';
import { Link } from 'react-router-dom';
import Search from './Search';
import StaticRating from './StaticRating';
function Home({ companies, fetchCompanies, loggedIn }) {

	let cards = companies.map((company, index) => {
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
						});
					}
					console.log(company);
					if (company) {
						defaultRating =
							(5 * five + 4 * four + 3 * three + 2 * two + one) /
							(five + four + three + two + one);
					}

		return (
			<Card key={index} className='mainCard'>
				<Link to={`insight/${company.name}`}>
					<Image src={company.logo} className='companyLogo' />
				</Link>
				<Container className='homeItems'>
					<Link to={`insight/${company.name}`} className='companyName'>
						<h5 >{company.name}</h5>
					</Link>
					<StaticRating defaultRating={defaultRating} />
				</Container>
			</Card>
		);
	});
	return (
		<div>
			<Search companies={companies} fetchCompanies={fetchCompanies} loggedIn={loggedIn}/>
			<Container className='homeContainer'>{cards}</Container>
		</div>
	);
}

export default Home;
