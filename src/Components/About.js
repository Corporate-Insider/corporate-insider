import React from 'react';
import {Jumbotron} from 'react-bootstrap';
import './About.css';
function About(props) {
    return (
			<Jumbotron className='jumbo'>
				<h2 className='about-heading'>About Corporate Insider</h2>
				<p className='about-paragraph'>
					Corporate Insider was created for the sole purpose of helping job
					searchers get insights about their prospective employers, from other
					members of the Corporate Insider community who have worked or
					currently work at the respective companies.
				</p>
                <br/>
				<hr className='hr' />

				<p className='about-paragraph'>
					We would really appreciate your reviews of the companies you have
					worked with, it would be of great help to other members of the
					Corporate Insider community who are actively job searching.
				</p>
			</Jumbotron>
		);
}

export default About;