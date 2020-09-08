import React, { useState } from 'react';

const createUrl = `http://localhost:8000/accounts/create_user/`;
function SignUp({setUsername}) {
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
        }).then((res)=> res.json()).then((res)=>{
            localStorage.setItem('token', res.token)
            localStorage.setItem('user', res.user.name);
            setUsername(res.name)
            
            window.location.replace('/');
        })
    };

	const handleChange = (event) => {
        let targetName = event.target.name;
        let value = event.target.value;
		if (targetName === 'email') {
			setInfo({ name: info.name, email: value, password: info.password });
		} else if (targetName === 'password') {
			setInfo({ name: info.name, email: info.email , password: value });
		}else if(targetName === 'username'){
            setInfo({ name: value, email: info.email, password: info.password });
        }
	};

    return (
			<form onSubmit={handleSubmit}>
				<h4>Sign Up</h4>
				<label htmlFor='username'>Username</label>
				<input
					type='text'
					name='username'
					value={info.name || ''} //because it displayed an uncontrolled error
					onChange={handleChange}
				/>
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

export default SignUp;