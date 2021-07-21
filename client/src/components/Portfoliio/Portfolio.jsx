import React, { useState, useEffect } from 'react'
import {useParams} from "react-router-dom"
import Subscription from "../Subscription/Subscription"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import PortfolioList from "../PortfolioList/PortfolioList"


function Portfolio({props, match, currencyList}) {
    const { id } = useParams(props)
    
    useEffect(() => {
        let savedId = sessionStorage.getItem('userId')
        if (!savedId) {
            sessionStorage.setItem('userId', id);
        }
    }, [])

    if (!id) {
        return <p>You Must Log in To access this page</p>
    }

    return (
            <>
            <Header path={match} />
                <PortfolioList
                    userId={id}
                    currencies={currencyList}
            />
            <Subscription
                userId={id}
            />
            <Footer />
            </>
        )
}

export default Portfolio

