import React from 'react'
import Particle from "../Particles/Particle"
import Lottie from 'react-lottie';
import "./Hero.scss"
import wallet from "../../assets/images/wallet.json"

function Hero() {

    const walletAnimate = {
        loop: true,
        autoplay: true,
        animationData: wallet,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    }
    return (
        <div className="hero">
            <Particle />
            <section className="hero__main">
                <div className="hero__main-right">
                    <h1 className="hero__main-title"><span className="hero__main-span">Manage</span> your investments in a smart way</h1>
                    <p className="hero__main-text">We bring everything you need, to invest smartly, together at one place.</p>
                </div>
                <div className="hero__main-left">
                    <Lottie options={walletAnimate} height={400} width={400} />
                </div>
            </section>
        </div>
    )
}

export default Hero
