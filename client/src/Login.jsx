import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './App.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handelSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post("http://localhost:9999/login", { email, password });
            console.log(result);
            if (result.data === "Success") {
                navigate('/')
            }

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <form onSubmit={handelSubmit} >
            <div className="container">
                <h1>Login</h1>
                <p>Please fill in this form </p>
                <hr />
                <label htmlFor="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="psw"><b>Password</b></label>
                <input type="text" placeholder="Enter Caste" name="text" id="text" required value={password} onChange={(e) => setPassword(e.target.value)} />
                <hr />
                <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

                <button type="submit" className="registerbtn">Login</button>
            </div>

            <div className="container signin">
                <p>Don't have an account? <a href="/sign-up">  SignUp </a>.</p>
            </div>
        </form>
    );
}

export default Login;
