import { useState, useEffect } from 'react'
import { trending } from "../../utils/api"
import "./Trending.scss"

function Trending() {
    const [trendingList, setTrendingList] = useState("")

    useEffect(() => {
        trending()
            .then(res => {
                setTrendingList(res.data.coins)
            })
            .catch(err => {
            console.log(err)
        })
    }, [])

    if (!trendingList) {
        return <p>Loading ...</p>
    }

    console.log(trendingList)
    return (
        <div className="trending">
            <h2 className="trending__title">Top Trending Today</h2>
            <div className="trending__section">
                {trendingList.map(item => {
                    return (
                        <section
                            key={item.item.id}
                            className="trending__items"
                        >
                            <div className="trending__img-container">
                                <img className="trending__img" src={item.item.small} />
                            </div>
                            
                            <section className="trending__items-text">
                                <h5 className="trending__rank">RANK: <span>{item.item.market_cap_rank}</span></h5>
                                <p className="trending__currency">CURRENCY: <span>{item.item.name}</span></p>
                                <p className="trending__price">PRICE: <span>${item.item.price_btc.toFixed(6)}</span></p>
                            </section>
                        </section>
                    )
                })}
            </div>
        </div>
    )
}

export default Trending
