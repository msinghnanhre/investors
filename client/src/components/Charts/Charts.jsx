import { useState, useRef, useEffect } from 'react'
import "./Charts.scss"
import BarChart from '../BarChart'
import { getChartData } from "../../utils/api"
import PolarAreaChart from "../PolarAreaChart/PolarAreaChart"

function Charts({ currencies, id, publicInterest, sentimentUp, sentimentDown, score}) {
    
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
                    price.push(item[1])
                    let time = new Date(item[0]).toLocaleDateString("en-us", { day: "2-digit", month: "2-digit", year: "numeric" })
                    timestamp.push(time)
                })
                setData(price)
                setLabel(timestamp)
            })
            .catch(err => console.log(err))
    }, [currencyId])
    
    const onChange = () => {
        setDuration(durationRef.current.value)
        console.log(duration)
    }

    if (!data && !label || duration === 0) {
        return <p>Loading...</p>
    }
    return (
        <div className="currencies">
            <form className="currencies__form">
                <input type="radio" name="duration" id="day" value="1" ref={durationRef} onChange={onChange}/>
                <label for="day">1 Day</label>
                <input type="radio" name="duration" id="week" value="7" ref={durationRef} onChange={onChange}/>
                <label for="week">7 Days</label>
                <input type="radio" name="duration" id="month" value="30" ref={durationRef} onChange={onChange}/>
                <label for="month">30 Days</label>
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
