import React, { Component } from 'react'
import axios from "axios"
import "./CurrencyCard.scss"

export default class CurrencyCard extends Component {

    getColor = (data) => {
        let color = null;
        this.props.images.map(image => {
            if (data === image.name) {
                color = image.color
            }
        })
        return color
    }

    render() {
        const { images, currencyList } = this.props
            
        if (!images) {
            return <p>Loading...</p>
         }
        return( 
            <div className="currencyCard">
                {currencyList.result.map(item => {
                    return(
                        <section
                            key={item.id}
                            className="currencyCard__items"
                            style={{
                                backgroundColor: this.getColor(`${item.symbol}`)
                            }}
                        >
                            <p>
                                {images.map((image,index) => {
                                    return <img key={index} src={image.name === item.symbol ? image.src : ""} alt=""/>
                            })}
                            </p>
                            <section className="currencyCard__items-text">
                                <h5>RANK: <span>{item.cmc_rank}</span></h5>
                                <h5>SYMBOL: <span>{item.symbol}</span></h5>
                                <p>CURRENCY: <span>{item.name}</span></p>
                                <p>PRICE: <span>$ {item.quote.USD.price}</span></p>
                            </section>
                        </section>
                    ) 
                })}
            </div>
            )
        }
}
