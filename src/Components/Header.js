import React from 'react';
import './Header.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
function Header(props) {
	return (
		<Navbar className='nav' collapseOnSelect variant='light' expand='md'>
			<LinkContainer to='/'>
				<Navbar.Brand>
					<h1 className='logo'>Corporate Insider</h1>
				</Navbar.Brand>
			</LinkContainer>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav>
					<LinkContainer to='/'>
						<Nav.Link>Companies</Nav.Link>
					</LinkContainer>
                    
					<LinkContainer to='/about'>
						<Nav.Link>About</Nav.Link>
					</LinkContainer>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default Header;
