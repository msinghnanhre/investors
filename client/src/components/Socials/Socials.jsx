import React from 'react'
import "./Socials.scss"
import block from "../../assets/icons/block.svg"


function Socials({ social, desc, coin }) {
    if (!social) {
        return <p>Loading ...</p>
    }
    return (

        <div className="socials">
            <h3 className="socials__title">Social Metrics</h3>
            <section className="socials__section">
                <div className="socials__left">
                    <h5 className="socials__left-title">Description</h5>
                    <p className="socials__left-body">{desc ? desc: "Visit the website mentioned under social for additional information"}</p>
                </div>
                <div className="socials__right">
                    <h5 className="socials__right-title">Socials Links</h5>
                    <div className="socials__homepage">
                        <img src={coin.image.small} alt="Twitter icon" />
                        <p><a href={social.homepage[0]}>Official Website</a></p>
                    </div>
                    <div className="socials__block">
                        <img src={block} alt="Reddit icon" />
                        
                        <p><a href={social.blockchain_site[0]}>BlockChain Explorer</a></p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Socials
