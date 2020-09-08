import React from 'react';
import './Header.css';
import { Nav, Button, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
function Header({loggedIn, setLoggedIn}) {
    const handleLogOut = (event) => {
			event.preventDefault();
		};

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
					<LinkContainer to='/login' className='button'>
						<Button>Login</Button>
					</LinkContainer>

					<LinkContainer to='/signup' className='button'>
						<Button>SignUp</Button>
					</LinkContainer>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
	const loggedInNav = (
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
					<Button onClick={handleLogOut}>Logout</Button>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);

	

	return loggedIn ? loggedInNav : loggedOutNav;

}

export default Header;
