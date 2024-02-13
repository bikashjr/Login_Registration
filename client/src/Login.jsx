import React from 'react';
import './App.css'

const Login = () => {
    return (
        <form >
            <div className="container">
                <h1>Login</h1>
                <p>Please fill in this form </p>
                <hr />
                <label htmlFor="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" id="email" required />

                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" id="psw" required />

                <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required />
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
