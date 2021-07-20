import React, { useState, useEffect } from 'react'
import {useParams} from "react-router-dom"
import AddAsset from "../AddAsset/AddAsset"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import PortfolioList from "../PortfolioList/PortfolioList"


const API_URL = 'http://localhost:8080'

function Portfolio({props, match, currencyList}) {
    const { id } = useParams(props)
    const [addedCoin, setAddedCoin] = useState(false)

    let savedId = null;
    useEffect(() => {
        savedId = sessionStorage.getItem('userId')
        if (!savedId) {
            sessionStorage.setItem('userId', id);
        }
        console.log(addedCoin)
        setAddedCoin(false)
    }, [addedCoin])


    const renderComponent = () => {
        setAddedCoin(true)
        console.log(addedCoin)
    }

    if (!id) {
        return <p>You Must Log in To access this page</p>
    }

    return (
            <>
            <Header path={match} />
            <div>
                <AddAsset
                    userId={id}
                    renderComponent={renderComponent}
                    props={props}
                    userId={id}
                />
            </div>
                <PortfolioList
                    userId={id}
                    currencies={currencyList}
                />
            <Footer />
            </>
        )
}

export default Portfolio

