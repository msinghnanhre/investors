import { useState, useRef, useEffect } from 'react'
import "./Charts.scss"
import BarChart from '../BarChart'
import { getChartData } from "../../utils/api"
import PolarAreaChart from "../PolarAreaChart/PolarAreaChart"


function Charts({  id, publicInterest, sentimentUp, sentimentDown, score}) {
    
    const [currencyId, setCurrencyId] = useState(id)
    const [data, setData] = useState([])
    const [label, setLabel] = useState([])
    const [duration, setDuration] = useState(7)

    const durationRef = useRef()

    useEffect(() => {
        getChartData(currencyId, duration)
            .then(res => {
                const price = []
                const timestamp = []
                res.data.prices.map(item => {
                    
                    let time = new Date(item[0]).toLocaleDateString("en-us", { month: "long",day: "2-digit", hour: "2-digit"})
                    timestamp.push(time)
                    price.push(item[1])
                })
                setData(price)
                setLabel(timestamp)
            })
            .catch(err => console.log(err))
    }, [currencyId, duration])
    
    const onChange = () => {
        setDuration(durationRef.current.value)
    }

    if (!data && !label) {
        return <p>Loading...</p>
    }
    return (
        <div className="currencies">
            <form className="currencies__form" >
                <label htmlFor="cars">Choose Duration</label>
                <select ref={durationRef} onChange={onChange} defaultValue="7">
                    <option value="1">1 Day</option>
                    <option value="7">7 Day</option>
                    <option value="30">30 Day</option>
                </select>
            </form>
            <BarChart
                duration={duration}
                data={data}
                label={label}
            />
            <PolarAreaChart
                publicInterest={publicInterest}
                sentimentUp={sentimentUp}
                sentimentDown={sentimentDown}
                score={score}
            />
        </div>
    )
}

export default Charts
