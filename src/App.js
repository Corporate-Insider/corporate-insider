import React from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home'
import { Container } from 'react-bootstrap';
function App() {
  return (
    <Container className="App">
      <Header/>
      <Home/>
    </Container>
  );
}

export default App;
