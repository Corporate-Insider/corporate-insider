import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home'
import { Container } from 'react-bootstrap';
import {Route} from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import About from './Components/About';
function App() {
  let [loggedIn, setLoggedIn] = useState(false);




  return (
		<Container className='App'>
			<Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />

			<Route path='/' exact component={Home} />
			<Route path='/about' component={About} />
			<Route path='/login' component={Login} />
			<Route path='/signup' component={SignUp} />
		</Container>
	);
}

export default App;
