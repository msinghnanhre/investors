import React, { Component } from 'react'
import axios from "axios"
import "./CurrencyCard.scss"

export default class CurrencyCard extends Component {

    getColor = (data) => {
        let color = null;
        this.props.images.data.map(image => {
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
            <div className="currencyCard" >
                {currencyList.map(item => {
                    return(
                        <section
                            key={item.id}
                            className="currencyCard__items"
                            style={{
                                backgroundColor: this.getColor(`${item.symbol}`)
                            }}
                        >
                            <p>
                                {images.data.map((image,index) => {
                                    return <img key={index} src={image.name === item.symbol ? image.src : ""} alt=""/>
                            })}
                            </p>
                            <section className="currencyCard__items-text">
                                <h5>RANK: <span>{item.cmc_rank}</span></h5>
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
