import React from 'react'
import Particle from "../Particles/Particle"
import "./Hero.scss"

function Hero() {
    return (
        <div className="hero">
            <Particle />
            <section className="hero__main">
                <div className="hero__main-right">
                    <h1 className="hero__main-title"><span className="hero__main-span">Manage</span> your investments smart way</h1>
                    <p className="hero__main-text">We bring everything you need, to invest smartly, together at one place.</p>
                </div>
                {/* <div className="hero__main-left">
                    <h1>Manage your investments smart way</h1>
                </div> */}
            </section>
        </div>
    )
}

export default Hero
