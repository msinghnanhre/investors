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
                            <img className="trending__img" src={item.item.small} />
                            <section className="trending__items-text">
                                <h5>RANK: <span>{item.item.market_cap_rank}</span></h5>
                                <p>CURRENCY: <span>{item.item.name}</span></p>
                                <p>PRICE: <span>{item.item.price_btc}</span></p>
                            </section>
                        </section>
                    )
                })}
            </div>
        </div>
    )
}

export default Trending
