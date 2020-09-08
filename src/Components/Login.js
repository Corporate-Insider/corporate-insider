import React, {useState} from 'react';

function Login(props) {

    let [info, setInfo] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = (event) =>{

    }

    const handleChange = (event)=>{
        let targetName = event.target.name;
		let value = event.target.value;
        if(targetName === "email"){
            setInfo({email: value})
        }else if (targetName === "password"){
            setInfo({password: value});
        }
    }


    return (
			<form onSubmit={handleSubmit}>
				<h4>Log In</h4>
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

export default Login;