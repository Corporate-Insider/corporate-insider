import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import './About.css';
function About(props) {
	return (
		<Jumbotron className='jumbo'>
			<h2 className='about-heading'>About Corporate Insider</h2>
			<p className='about-paragraph'>
				Corporate Insider was created for the sole purpose of helping job
				searchers get insights about their prospective employers, from other
				members of the Corporate Insider community who have worked or currently
				work at the respective companies.
			</p>
			<br />
			<hr className='hr' />
			<h3>Features: </h3>
			<h4>Adding a new Company </h4>
			<p>
				To add a company that isn't on the our database, you need to put in the
				company's name and click on search to show a dropdown of matched
				companies for you to select from, to add to our database.
			</p>
			<h4>Creating, Editing and Deleting Reviews </h4>
			<p>
				You can create a new review, edit and/or delete reviews created by you.
			</p>
			<h4>5 Star Rating </h4>
			<p>
				The can only give one five star rating per company. When you give your rating, all the shows the cumulated rating for each company insight page.
			</p>
			<p>
				Note: You need to be logged in to be able to Add a new company, make a
				new review, give a 5-star rating, edit and/or delete your review(s). When logged Out, you can only search for an existing company, by just typing out the name of the company.
			</p>

			<hr className='hr' />
			<p className='about-paragraph'>
				We would really appreciate your reviews of the companies you have worked
				with, it would be of great help to other members of the Corporate
				Insider community who are actively job searching.
			</p>
		</Jumbotron>
	);
}

export default About;
