import React, { useState, useEffect } from 'react';
import {Image, Card, Container} from 'react-bootstrap';
import './Home.css'
const proxyurl = 'https://cors-anywhere.herokuapp.com/';
const url = `http://localhost:8000/companies/`;
function Home(props) {
    // let [companies, setCompanies] = useState([]);
    // useEffect(()=>{
    //     fetch(url)
	// 				.then((res) => {
	// 					return res.json();
	// 				})
	// 				.then((res) => {
    //                     console.log(res);
    //                     setCompanies(companies = res);
	// 				});
    // }, [])
    // let cards = companies.map((company, index)=>{
    //     return (
	// 				<Card key={index} className='mainCard'>
	// 					<Card.Body className='card'>
	// 						<Image src={company.logo} className='companyLogo' />
	// 						<h5 className='companyName'>{company.name}</h5>
	// 					</Card.Body>
	// 				</Card>
	// 			);
    // })
    return (
			<div>
				{/* {cards} */}
			</div>
		);
}

export default Home;