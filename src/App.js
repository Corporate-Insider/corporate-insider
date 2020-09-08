import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home'
import { Container } from 'react-bootstrap';
import {Route, Redirect} from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import About from './Components/About';
import Insight from './Components/Insight'

const url = `http://localhost:8000/companies/`;
function App() {
  let [loggedIn, setLoggedIn] = useState(
		localStorage.getItem('token') ? true : false
  );
  
  let [username, setUsername] = useState(localStorage.getItem('user'))

  let [companies, setCompanies] = useState([]);
	useEffect(() => {
		fetch(url)
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				console.log(res);
				setCompanies((companies = res));
			});
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
					return <Home companies={companies} />;
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
					return <SignUp setLoggedIn={setLoggedIn} />;
				}}
			/>
			<Route
				path='/insight/:company'
				render={(routerProps) => {
					return <Insight match={routerProps.match} companies={companies}/>;
				}}
			/>
			<Redirect path='*' to='/' />
		</Container>
	);
}

export default App;
