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

const url = `http://localhost:8000/companies/`;
const currentUserURL = 'http://localhost:8000/accounts/current_user/';
function App() {
	let [loggedIn, setLoggedIn] = useState(
		localStorage.getItem('token') ? true : false
	);

	let [username, setUsername] = useState('');

	let [companies, setCompanies] = useState([]);
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
		if (loggedIn && localStorage.getItem('token')) {
			fetch(currentUserURL, {
				headers: {
					Authorization: `JWT ${localStorage.getItem('token')}`,
				},
			})
				.then((res) => res.json())
				.then((res) => {
          console.log(res);
					if (res.name) {
						setUsername(res.name);
					} else {
						setLoggedIn(false);
					}
				})
				.catch((error, status) => {
					if (status === '401') {
						setLoggedIn(false);
					}
				});
		}
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
					return <Home companies={companies} fetchCompanies ={fetchCompanies}/>;
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
					return <SignUp setLoggedIn={setLoggedIn} setUsername={setUsername} />;
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
		</Container>
	);
}

export default App;
