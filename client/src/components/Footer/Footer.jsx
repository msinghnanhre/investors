import React from 'react'
import "./Footer.scss"
import logo from "../../assets/icons/logo2.svg"

function Footer() {
    return (
        <div className="footer">
            <h5 className="footer__title">&#169; 2021 <span>INVEST | SMART</span> </h5>
            <img className="footer__img" src={logo} alt="Investors logo" />
        </div>
    )
}

export default Footer
