import Events from "../Events/Events"
import "./CurrencyCard.scss"
import { Link } from "react-router-dom"
import { useEffect } from "react";
import Hero from "../Hero/Hero"
import detail from "../../assets/icons/add.svg"
import Trending from "../Trending/Trending"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import arrowUp from "../../assets/icons/arrowUp.svg"
import arrowDown from "../../assets/icons/arrowDown.svg"
import Roadmap from "../Roadmap/Roadmap"
import { motion, useAnimation } from "framer-motion"
import {useInView} from "react-intersection-observer"

function CurrencyCard({ currencyList, match }) {
    const { ref, inView } = useInView({
        threshold:0.2
    })
    const animation = useAnimation()
    useEffect(() => {
        if (inView) {
            animation.start({
                opacity: 1,
                transition: {
                    duration: 1,
                    type: 'spring',
                    bounce: 0.5
                }
            })
        }
        else if (!inView) {
            animation.start({
                opacity: 0,
            })
        }
        console.log(inView)
    }, [inView])

    return (
        <motion.div
            
            initial={{ x: `-100vw`, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ x: `100vw`, transition: { ease: 'easeInOut' } }}
        >
            <Header path={match}/>
            <section className="currency"

            >
                <Hero />
                <Trending />
                
                <h2 className="currencyTitle">Cards for top 100 currencies</h2>
                <div
                    className="currencyCard"
                    ref={ref}
                    
              
                >
                {currencyList.map(item => {
                    return(
                        <motion.section
                            animate={animation}
                            key={item.id}
                            className="currencyCard__items"
                        >
                            <Link to={`/${item.id}/detail`}><img className="currencyCard__detail" src={detail} alt="detail arrow" /></Link>
                            <img className="currencyCard__img" src={item.image}  alt="asset logo"/>
                            <section className="currencyCard__items-text">
                                <h5>RANK: <span>{item.market_cap_rank}</span></h5>
                                <p>CURRENCY: <span>{item.name}</span></p>
                                <p>PRICE: <span>{item.current_price.toFixed(3)}</span></p>
                                <span className="currencyCard__priceChange">Change In 24h : 
                                    <span className={item.price_change_percentage_24h > 0 ? "currencyCard__positive" : "currencyCard__negative"}>
                                        {  item.price_change_percentage_24h.toFixed(2)} %
                                    </span>
                                    <span className="currencyCard__priceChange-img">
                                        <img src={item.price_change_percentage_24h > 0 ? arrowUp: arrowDown } alt="Price action icon"/>
                                    </span>
                                </span>
                            </section>
                        </motion.section>
                    ) 
                })}
                </div>
                <Events />
                <Roadmap />
            </section>
            <Footer />
        </motion.div>
        )
}


export default CurrencyCard