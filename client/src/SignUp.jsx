import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

import './App.css'


const SignUp = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
        e.preventDefault();
        try {
            const result = await axios.post("http://localhost:9999/register", { email, password });
            console.log(result);
            navigate('/login')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form onSubmit={handleSubmit} >
            <div className="container">
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                <hr />
                <label htmlFor="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" id="psw" required value={password} onChange={(e) => setPassword(e.target.value)} />

                <hr />
                <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

                <button type="submit" className="registerbtn">Register</button>
            </div>

            <div className="container signin">
                <p>Already have an account? <a href="/login">Sign in</a>.</p>
            </div>
        </form>
    );
}
export default SignUp;


