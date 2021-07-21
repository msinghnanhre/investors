import { useParams } from 'react-router-dom'
import { useState,useEffect } from "react";
import Charts from "../Charts/Charts"
import { coinDetail } from "../../utils/api"
import Socials from "../Socials/Socials"
import "./AssetDetail.scss"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"

function AssetDetail({ currencies, match }) {

    const { id } = useParams()
    const [coin, setCoin] = useState(null)
    const [sentimentDown, setSentimentDown] = useState(0)
    const [sentimentUp, setSentimentUp] = useState(0)
    const [publicInterest, setPublicInterest] = useState(0)
    const [score, setScore] = useState(0)
    const [social, setSocial] = useState("")
    const [description, setDescription] = useState("")

    useEffect(() => {
        coinDetail(id)
            .then(res => {
                setCoin(res.data)
                setSentimentDown(res.data.sentiment_votes_down_percentage)
                setSentimentUp(res.data.sentiment_votes_up_percentage)
                setPublicInterest(res.data.public_interest_score)
                setScore(res.data.coingecko_score)
                setSocial(res.data.links)
                setDescription(res.data.description.en)
            })
            .catch(err => {
            console.log(err)
        })
    }, [])

    console.log(coin)
    if (coin === null) {
        return <p>Loading ......</p>
    }
    return (
        <>
            <Header path={match}/>
            <section className="assetDetail">
                <div className="assetDetail__coin">
                    <section className="assetDetail__left">
                        <img className="assetDetail__img" src={coin.image.small} alt="asset logo" />
                        <section className="assetDetail__items-text">
                            <h5>RANK: <span>{coin.market_cap_rank}</span></h5>
                            <p>CURRENCY: <span>{coin.name}</span></p>
                            <p>PRICE: <span>$USD {coin.market_data.current_price.usd}</span></p>
                        </section>
                    </section>
                    <section className="assetDetail__right">
                        <p>Circulating Supply: {coin.market_data.circulating_supply ? coin.market_data.circulating_supply.toFixed(2): "Not Provided"}</p>
                        <p>Total Supply: {coin.market_data.total_supply ? coin.market_data.total_supply.toFixed(2): "Not Provided"}</p>
                        <p>Max Supply: {coin.market_data.max_supply ? coin.market_data.max_supply.toFixed(2): "Not provided"}</p>
                    </section>
                </div>
                <section className="assetDetail__charts">
                    <Charts
                        currencies={currencies}
                        id={id}
                        publicInterest={publicInterest}
                        sentimentUp={sentimentUp}
                        sentimentDown={sentimentDown}
                        score={score}
                    />
                </section>
                <Socials
                    social={social}
                    desc={description}
                    coin={coin}
                />
            </section>
            <Footer />
        </>
    )
}

export default AssetDetail
