import React, { useState, useEffect } from 'react'
import {useParams} from "react-router-dom"
import AddAsset from "../AddAsset/AddAsset"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import PortfolioList from "../PortfolioList/PortfolioList"


const API_URL = 'http://localhost:8080'

function Portfolio(props) {
    const { id } = useParams(props)
    const [addedCoin, setAddedCoin] = useState(null)

    let savedId = null;
    useEffect(() => {
        savedId = sessionStorage.getItem('userId')
        if (!savedId) {
            sessionStorage.setItem('userId', id);
        }
        setAddedCoin(false)
    }, [addedCoin])

    const logout = () => {
        window.location = `${API_URL}/portfolio/logout`
    }

    const renderComponent = () => {
        setAddedCoin(true)
    }

    if (!id) {
        return <p>You Must Log in To access this page</p>
    }

    return (
            <>
            <Header />
            <div>
                <AddAsset
                    userId={id}
                    renderComponent={renderComponent}
                />
                <button onClick={logout}>Log out</button>
            </div>
            <PortfolioList
                userId={id}
                currencies={props.currencyList}
            />
            <Footer />
            </>
        )
}

export default Portfolio

