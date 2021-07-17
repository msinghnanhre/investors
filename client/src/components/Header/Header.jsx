import {useState}from 'react'
import logo from "../../assets/icons/logo2.svg"
import "./Header.scss"
import {Link} from "react-router-dom"

function Header() {
    const portfolioId = sessionStorage.getItem('userId') 

    if (!portfolioId) {
        return <p>Loading .....</p>
    }
    return (
        <div className="header">
            <img className="header__logo" src={logo} alt="investors Logo" />
            <section className="header__links">
                <Link to="/explore">
                    <button className="header__links-explore">Explore</button>
                </Link>
                <Link to={`/portfolio/${portfolioId}`}>
                    <button className="header__links-portfolio">Portfolio</button>
                </Link>
            </section>
        </div>
    )
}

export default Header
