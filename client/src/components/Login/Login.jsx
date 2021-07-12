import React from 'react'
import Particle from "../Particles/Particle"
import "./Login.scss"
import { Link } from "react-router-dom"
import axios from "axios"

function Login() {

    return (
        <div className="login">
            <section className="login__main">
                <form className="login__main-form">
                    <div className="login__main-form--section">
                        <label className="login__main-form--label" for="email">Email</label>
                        <input className="login__main-form--input" type="text" name="email" placeholder="Enter Your Email"/>
                    </div>
                    <div className="login__main-form--section">
                        <label className="login__main-form--label" for="password">Password</label>
                        <input className="login__main-form--input" type="text" name="password" placeholder="Enter Your Password"/>
                    </div>
                    <div className="login__main-form--section">
                        <button className="login__main-form--login" type="submit" >Log in</button>
                        <button className="login__main-form--cancel">Cancel</button>
                        <span className="login__main-form--span">OR</span>
                        <button className="login__main-form--google">Sign Up</button>
                    </div>
                </form>
            </section>
            <Particle />
        </div>
    )
}

export default Login
