import React, { useState, useEffect } from 'react';
import {Image, Card, Container} from 'react-bootstrap';
import './Home.css';
import { Link } from 'react-router-dom';


function Home({companies}) {
  
    let cards = companies.map((company, index)=>{
        return (
					<Card key={index} className='mainCard'>
						<Card.Body className='card'>
							<Link to={`insight/${company.name}`}>
								<Image src={company.logo} className='companyLogo' />
							</Link>
							<Link to={`insight/${company.name}`} className='companyName'>
								<h5>{company.name}</h5>
							</Link>
						</Card.Body>
					</Card>
				);
    })
    return (
			<div>
				{cards}
			</div>
		);
}

export default Home;