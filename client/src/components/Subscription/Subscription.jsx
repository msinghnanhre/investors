import "./Subscription.scss";
import React from 'react'
import {postSubscription} from "../../utils/api"
import {useRef, useState} from "react"

function Subscription({userId}) {
    const emailRef = useRef()

    const[modal, setModal] = useState(false)

    const submitHandler = (e) => {
        const payload = {
            id: userId,
            email: emailRef.current.value
        }

        postSubscription(userId, payload)
            .then(res => {
                console.log(res)
                setModal(true)
                emailRef.current.value = ""
            }).catch(err => {
            console.log(err)
        })
        e.preventDefault()
    }
    
    return (
        <div className="subscription">
            <h2 className="subscription__title">Enroll into our Coin AirDrop Program</h2>
            <p className="subscription__body">As our platform user , you get exclusive chance to earn INVESTORS TOKEN. Enroll yourself into our airdrop program to have token
                credited to your account when tokens are issued.</p>
            <form className="subscription__form" onSubmit={submitHandler}>
                <input
                    className="subscription__email"
                    ref={emailRef} type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    disabled = {modal? "disabled": ""}
                />
                <input className="subscription__submit" type="submit" />
            </form>
            <p className={modal ? "valid" : "inValid"}>Successfully Subscribed, Stay tuned for future updates</p>
            <p>Click Here to know more about <a href="https://coinmarketcap.com/airdrop/">Live Airdrops</a> Campaigns</p>
        </div>
    )
}

export default Subscription
