import React from 'react'
import logo from "../../assets/icons/logo2.svg"
import "./Header.scss"
import {Link} from "react-router-dom"

function Header() {
    return (
        <div className="header">
            <img className="header__logo" src={logo} alt="investors Logo" />
            <section className="header__links">
                <Link to="/explore">
                    <button className="header__links-explore">Explore</button>
                </Link>
                <Link to="/portfolio">
                    <button className="header__links-portfolio">Portfolio</button>
                </Link>
            </section>
        </div>
    )
}

export default Header
