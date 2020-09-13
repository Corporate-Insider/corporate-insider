import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
const auth = `http://localhost:8000/token-auth/`;
function Login({ setLoggedIn }) {
	const [info, setInfo] = useState({
		email: '',
		password: '',
	});
	const [wrongInput, setWrongInput] = useState(false);
	const handleSubmit = (event) => {
		event.preventDefault();
		fetch(auth, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(info),
		})
			.then((res) => res.json())
			.then((res) => {
				localStorage.setItem('token', res.token);
				localStorage.setItem('user', res.user.name);
				localStorage.setItem('userId', res.user.id);
			})
			.then((res) => {
				setLoggedIn(true);
				window.location.replace('/');
			})
			.catch((error) => {
				if (error) {
					setLoggedIn(false);
					setWrongInput(true);
				}
			});
	};

	const handleChange = (event) => {
		let targetName = event.target.name;
		let value = event.target.value;
		if (targetName === 'email') {
			setInfo({ email: value, password: info.password });
		} else if (targetName === 'password') {
			setInfo({ password: value, email: info.email });
		}
	};

	return (
		<Form onSubmit={handleSubmit} className='form'>
			<h4 className='formTitle'>Log In</h4>
			{wrongInput && <p>Email and Password do not match</p>}
			<Form.Label htmlFor='username'>Email</Form.Label>
			<Form.Control
				className='control'
				type='email'
				name='email'
				value={info.email || ''}
				onChange={handleChange}
			/>
			<Form.Label htmlFor='password'>Password</Form.Label>
			<Form.Control
				className='control'
				type='password'
				name='password'
				value={info.password || ''}
				onChange={handleChange}
			/>
			<Button type='submit' className='button'>
				Submit
			</Button>
		</Form>
	);
}

export default Login;
