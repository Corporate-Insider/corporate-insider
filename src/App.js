import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home'
import { Container } from 'react-bootstrap';
function App() {
  let [loggedIn, setLoggedIn] = useState(false);
  let [loggedOut, setLoggedOut] = useState(true);

  return (
		<Container className='App'>
			<Header
				loggedIn={loggedIn}
				setLoggedIn={setLoggedIn}
				setLoggedOut={setLoggedOut}
				loggedOut={loggedOut}
			/>
			<Home />
		</Container>
	);
}

export default App;
