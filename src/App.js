import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import { Container } from 'react-bootstrap';
import { Route, Redirect } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import About from './Components/About';
import Insight from './Components/Insight';
import Footer from './Components/Footer';
const url = `https://corporate-db.herokuapp.com/companies/`;
const currentUserURL =
	'https://corporate-db.herokuapp.com/accounts/current_user/';
function App() {
	const [loggedIn, setLoggedIn] = useState(
		localStorage.getItem('token') ? true : false
	);

  const [username, setUsername] = useState(localStorage.getItem('user'));

	const [companies, setCompanies] = useState([]);
	const fetchCompanies = () => {
		fetch(url)
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				setCompanies(res);
			});
	};

	useEffect(() => {
    fetchCompanies();
	}, []);

	return (
		<Container className='App'>
			<Header
				loggedIn={loggedIn}
				setLoggedIn={setLoggedIn}
				setUsername={setUsername}
        username={username}
			/>

			<Route
				path='/'
				exact
				render={() => {
					return <Home companies={companies} fetchCompanies ={fetchCompanies} loggedIn={loggedIn}/>;
				}}
			/>
			<Route path='/about' component={About} />
			<Route
				path='/login'
				render={() => {
					return <Login setLoggedIn={setLoggedIn} />;
				}}
			/>
			<Route
				path='/signup'
				render={() => {
					return (
						<SignUp
							setLoggedIn={setLoggedIn}
							setUsername={setUsername}
						/>
					);
				}}
			/>
			<Route
				path='/insight/:company'
				render={(routerProps) => {
					return (
						<Insight
              loggedIn={loggedIn}
							match={routerProps.match}
							companies={companies}
							fetchCompanies={fetchCompanies}
						/>
					);
				}}
			/>
			<Redirect path='*' to='/' />
      <Footer/>
		</Container>
	);
}

export default App;
