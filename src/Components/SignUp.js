import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './Signup.css';
const createUrl = `https://corporate-db.herokuapp.com/accounts/create_user/`;
function SignUp({ setUsername, setLoggedIn }) {
	const [info, setInfo] = useState({
		name: '',
		email: '',
		password: '',
	});
	const [wrongInput, setWrongInput] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [confirmPassword, setConfirmPassword] = useState('');
	const [valid, setValid] = useState(true);
	const handleSubmit = (event) => {
		event.preventDefault();
		setSubmitted(true);
		if (info.password.length >= 6 && confirmPassword.length >= 6) {
			if (info.password === confirmPassword) {
				setValid(true);
				fetch(createUrl, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(info),
				})
					.then((res) => res.json())
					.then((res) => {
						localStorage.setItem('token', res.token);
						localStorage.setItem('user', res.name);
						localStorage.setItem('userId', res.id);
						setUsername(res.name);
						if (res.token) {
							setLoggedIn(true);
							window.location.replace('/');
						}
					})
					.catch((error) => {
						if (error) {
							setWrongInput(true);
							setLoggedIn(false);
						}
					});
			}
		} else {
			setValid(false);
		}
	};
	const handleCancel = (event) => {
		event.preventDefault();
		setInfo({
			name: '',
			email: '',
			password: '',
		});
		setConfirmPassword('');
		setValid(false);
	};

	const handleChange = (event) => {
		let id = event.target.id;
		let value = event.target.value;
		if (id === 'email') {
			setInfo({ name: info.name, email: value, password: info.password });
		} else if (id === 'password') {
			setInfo({ name: info.name, email: info.email, password: value });
		} else if (id === 'username') {
			setInfo({ name: value, email: info.email, password: info.password });
		} else if (id === 'confirm') {
			setConfirmPassword(value);
		}
	};

	return (
		<Container>
			{!valid && submitted && <p>Your password is incorrect!</p>}
			<Form onSubmit={handleSubmit} className='form'>
				<h4 className='formTitle'>Sign Up</h4>
				{wrongInput && <p>Email and Password do not match</p>}
				<Form.Label htmlFor='username'>Username</Form.Label>
				<Form.Control
					className='control'
					type='text'
					id='username'
					value={info.name || ''} //because it displayed an uncontrolled error
					onChange={handleChange}
				/>
				<Form.Label htmlFor='username'>Email</Form.Label>
				<Form.Control
					className='control'
					type='email'
					id='email'
					value={info.email || ''}
					onChange={handleChange}
				/>
				<Form.Text className='text-muted'>
					We'll never share your email with anyone else.
				</Form.Text>
				<Form.Label htmlFor='password'>Password</Form.Label>
				<Form.Control
					className='control'
					type='password'
					id='password'
					placeholder='Password'
					value={info.password || ''}
					onChange={handleChange}
				/>
				<Form.Label htmlFor='confirmPassword'>Confirm Password</Form.Label>
				<Form.Control
					className='control'
					type='password'
					id='confirm'
					value={confirmPassword || ''}
					onChange={handleChange}
				/>
				<p>Passwords must match.</p>
				<Button type='submit' className='button'>
					{' '}
					Submit
				</Button>
				<Button type='button' onClick={handleCancel} className='button'>
					Cancel
				</Button>
			</Form>
		</Container>
	);
}

export default SignUp;
