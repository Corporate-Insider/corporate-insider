import React, {useState} from 'react';
const auth = `http://localhost:8000/token-auth/`;
function Login({ setLoggedIn }) {
	let [info, setInfo] = useState({
		email: '',
		password: '',
	});

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
				
			}).then(()=>{
                setLoggedIn(true);
                window.location.replace('/');
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
		<form onSubmit={handleSubmit}>
			<h4>Log In</h4>
			<label htmlFor='username'>Email</label>
			<input
				type='email'
				name='email'
				value={info.email || ''}
				onChange={handleChange}
			/>
			<label htmlFor='password'>Password</label>
			<input
				type='password'
				name='password'
				value={info.password || ''}
				onChange={handleChange}
			/>
			<input type='submit' />
		</form>
	);
}

export default Login;