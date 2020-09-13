import React from 'react';
import {Jumbotron} from 'react-bootstrap';
import './About.css';
function About(props) {
    return (
			<Jumbotron>
				<h1 className='about-heading'>About Corporate Insider</h1>
				<p className='about-paragraph'>
					Corporate Insider was created for the sole purpose of helping job
					searchers get insights about their prospective employers from other
					members of the Corporate Insider community that have worked or
					currently work at the respective companies
				</p>
			</Jumbotron>
		);
}

export default About;