import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';

const createUrl = `http://localhost:8000/accounts/create_user/`;
function SignUp({setUsername}) {
    const [info, setInfo] = useState({
        name: '',
        email: '',
        password: '',
    })
    const [confirmPassword, setConfirmPassword] = useState('')
    const [valid, setValid] = useState(true);
   const handleSubmit = (event) => {
			event.preventDefault();
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
							console.log(res);
							window.location.replace('/');
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
				{!valid && <p>Your password is incorrect!</p>}
				<form onSubmit={handleSubmit}>
					<h4>Sign Up</h4>
					<label htmlFor='username'>Username</label>
					<input
						type='text'
						id='username'
						value={info.name || ''} //because it displayed an uncontrolled error
						onChange={handleChange}
					/>
					<label htmlFor='username'>Email</label>
					<input
						type='email'
						id='email'
						value={info.email || ''}
						onChange={handleChange}
					/>

					<label htmlFor='password'>Password</label>
					<input
						type='password'
						id='password'
						placeholder='Password'
						value={info.password || ''}
						onChange={handleChange}
					/>
					<label htmlFor='confirmPassword'>Confirm Password</label>
					<input
						type='password'
						id='confirm'
						value={confirmPassword || ''}
						onChange={handleChange}
					/>
					<input type='submit' />
					<button type='button' onClick={handleCancel}>
						Cancel
					</button>
					<p>Passwords must match.</p>
				</form>
			</Container>
		);
}

export default SignUp;