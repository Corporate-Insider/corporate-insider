import React, { useState } from 'react';


const createUrl = `http://localhost:8000/accounts/create_user/`;
function SignUp(props) {
    const [info, setInfo] = useState({
        name: '',
        email: '',
        password: '',
    })

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch(createUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        })
    };

	const handleChange = (event) => {
        let targetName = event.target.name;
        let value = event.target.value;
		if (targetName === 'email') {
			setInfo({ email: value });
		} else if (targetName === 'password') {
			setInfo({ password: value });
		}else if(targetName === 'username'){
            setInfo({name: value })
        }
	};

    return (
			<form onSubmit={handleSubmit}>
				<h4>Sign Up</h4>
				<label htmlFor='username'>Username</label>
				<input
					type='text'
					name='username'
					value={info.name}
					onChange={handleChange}
				/>
				<label htmlFor='username'>Email</label>
				<input
					type='email'
					name='email'
					value={info.email}
					onChange={handleChange}
				/>

				<label htmlFor='password'>Password</label>
				<input
					type='password'
					name='password'
					value={info.password}
					onChange={handleChange}
				/>
				<input type='submit' />
			</form>
		);
}

export default SignUp;