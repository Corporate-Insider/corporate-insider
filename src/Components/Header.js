import React from 'react';
import './Header.css';
import {Nav, Button, Navbar} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
function Header(props) {
    const loggedOutNav = (
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
						<Button>Login</Button>
						<Button>SignUp</Button>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);


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
