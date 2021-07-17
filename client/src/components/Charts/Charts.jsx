import { useState, useRef, useEffect } from 'react'
import "./Charts.scss"
import BarChart from '../BarChart'
import { getChartData } from "../../utils/api"
import PolarAreaChart from "../PolarAreaChart/PolarAreaChart"

function Charts({ currencies, id, publicInterest, sentimentUp, sentimentDown, score}) {
    
    const [currencyId, setCurrencyId] = useState(id)
    const [data, setData] = useState([])
    const [label, setLabel] = useState([])

    useEffect(() => {
        getChartData(currencyId)
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
    

    if (!data && !label) {
        return <p>Loading...</p>
    }
    return (
        <div className="currencies">
            <BarChart
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
