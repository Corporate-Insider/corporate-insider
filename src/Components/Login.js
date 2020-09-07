import React, { useState, useEffect } from 'react';

function Login(props) {

    let [info, setInfo] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = (event) =>{


    }

    const handleEmailChange = (event)=>{
        //set the email to info.email with setInfo
    }
    const handlePasswordChange = (event) => {
			//set the email to info.password with setInfo
		};
    return (
			<form onSubmit={handleSubmit}>
				<h4>Log In</h4>
				<label htmlFor='username'>Username</label>
				<input
					type='email'
					name='email'
					value={info.email}
					onChange={handleEmailChange}
				/>
				<label htmlFor='password'>Password</label>
				<input
					type='password'
					name='password'
					value={info.password}
					onChange={this.handle_change}
				/>
				<input type='submit' />
			</form>
		);
}

export default Login;