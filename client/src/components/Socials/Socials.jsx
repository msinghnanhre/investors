import React from 'react'
import "./Socials.scss"
import twitter from "../../assets/icons/twitter.svg"
import reddit from "../../assets/icons/reddit.svg"

function Socials({ social, desc }) {
    if (!social) {
        return <p>Loading ...</p>
    }
    return (

        <div className="socials">
            <h3 className="socials__title">Social Metrics</h3>
            <section className="socials__section">
                <div className="socials__left">
                    <h5 className="socials__left-title">Description</h5>
                    <p className="socials__left-body">{desc}</p>
                </div>
                <div className="socials__right">
                    <h5 className="socials__right-title">Socials</h5>
                    <div className="socials__twitter">
                        <img src={twitter} alt="Twitter icon" />
                        <h4>
                            Twitter
                        </h4>
                        <p>Followers: <span>{social.twitter_followers}</span></p>
                    </div>
                    <div className="socials__reddit">
                        <img src={reddit} alt="Reddit icon" />
                        <h4>
                            Reddit
                        </h4>
                        
                        <p>Reddit Subscribers: <span>{social.reddit_subscribers}</span></p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Socials
