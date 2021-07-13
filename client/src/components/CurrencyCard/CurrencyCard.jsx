import React, { Component } from 'react'
import "./CurrencyCard.scss"
import { Link } from "react-router-dom"
import Hero from "../Hero/Hero"
import Modal from "../Modal/Modal"
import next from "../../assets/icons/next.svg"
import detail from "../../assets/icons/add.svg"
import Trending from "../Trending/Trending"

function CurrencyCard({ currencyList, modalDisplay, modalClick }){
        return (
            <section className="currency">
                <Hero />
                <Trending />
                
                <h2 className="currencyTitle">Cards for top 100 currencies</h2>
                <div className="currencyCard">
                {currencyList.map(item => {
                    return(
                        <section
                            key={item.id}
                            className="currencyCard__items"
                        >
                            <Link to={`/${item.id}/detail`}><img className="currencyCard__detail" src={detail} alt="detail arrow" /></Link>
                            <img className="currencyCard__img" src={item.image}  />
                            <section className="currencyCard__items-text">
                                <h5>RANK: <span>{item.market_cap_rank}</span></h5>
                                <p>CURRENCY: <span>{item.name}</span></p>
                                <p>PRICE: <span>{item.current_price}</span></p>
                                <span className="currencyCard__priceChange">CHANGE: <span className={`${item.price_change_percentage_24h} > 0 ? "currencyCard__positive": "currencyCard__negative"`}> { item.price_change_percentage_24h } </span></span>
                            </section>
                        </section>
                    ) 
                })}

                <div className={modalDisplay ? "block" : "none"}>
                    <Modal modalClick={modalClick}/>
                </div>
                </div>
            </section>
            )

}


export default CurrencyCard