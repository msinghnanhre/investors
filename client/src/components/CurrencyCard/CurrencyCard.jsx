import React, { Component } from 'react'
import "./CurrencyCard.scss"
import Paginate from "../Paginate/Paginate"
import add from "../../assets/icons/add.svg"
import { Link } from "react-router-dom"
import Hero from "../Hero/Hero"
import Modal from "../Modal/Modal"

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
        const { images, currencyList, pageChanger, modalDisplay, modalClick } = this.props  
        if (!images) {
            return <p>Loading...</p>
         }
        return (
            <section>
            <Hero />
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
                            <Link to="/portfolio"><img className="currencyCard__add" src={add} alt="add" /></Link>
                            <p>
                                {images.map((image,index) => {
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
                    <Paginate pageChanger={pageChanger} />
                    <div className={modalDisplay ? "block" : "none"}>
                        <Modal modalClick={modalClick}/>
                    </div>
            </div>
            </section>
            )
        }
}
