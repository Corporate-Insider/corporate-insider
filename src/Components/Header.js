import React from 'react';
import './Header.css';
import { Nav, Button, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
function Header({loggedIn, setLoggedIn, username,setUsername }) {
    const handleLogOut = () => {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            localStorage.removeItem('userId');
            setLoggedIn(false);
            setUsername('');
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
						<Button className='btn-xs btn'>Login</Button>
					</LinkContainer>

					<LinkContainer to='/signup' className='button'>
						<Button className='btn-sm btn'>SignUp</Button>
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
					<h5>{loggedIn ? `Hi, ${username}` : 'Please Log In'}</h5>
					<Button onClick={handleLogOut} className='btn-sm btn'>
						Logout
					</Button>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);

	

	return loggedIn ? loggedInNav : loggedOutNav;

}

export default Header;
