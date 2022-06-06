import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import {Button, TextField} from "@mui/material";

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default function Login({setToken}) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
    }

    return (
        <div className="login-wrapper">
            <form className="login-form" onSubmit={handleSubmit}>
                <TextField sx={{margin: "10px", boxSizing: "border-box"}} type="text" id="outlined-basic" label="Login" variant="outlined"
                           onChange={e => setUserName(e.target.value)}/>
                <TextField sx={{margin: "10px", boxSizing: "border-box"}} type="password" id="outlined-basic" label="Password" variant="outlined"
                           onChange={e => setPassword(e.target.value)}/>

                <Button type="submit" variant="outlined">Login</Button>

            </form>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}