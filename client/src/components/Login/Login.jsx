import React from 'react'
import Particle from "../Particles/Particle"
import "./Login.scss"
import coins from "../../assets/images/coins.json"
import Lottie from 'react-lottie';
import logo from "../../assets/icons/logo2.svg"

const API_URL = 'http://localhost:8080'

function Login() {
    const authLogin = () => {
        window.location = `${API_URL}/auth/google`
    }

    const coinsAnimate = {
        loop: true,
        autoplay: true,
        animationData: coins,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    }
    return (
        <div className="login">
            <section className="login__card">
                <h1 className="login__title">Welcome to
                    <img className="login__logo" src={logo} alt="investors logo" />
                </h1>

                <Lottie options={coinsAnimate} height={400} width={400} />
                <p>Click here to access your portfolio details</p>
                <button className="login__login" onClick={authLogin}>Log In with Google</button>
                <p>Sign-Up with Google to start portfolio</p>
                <button className="login__signup" onClick={authLogin}>Sign Up with Google</button>
            </section>
            <Particle />
        </div>
    )
}

export default Login
