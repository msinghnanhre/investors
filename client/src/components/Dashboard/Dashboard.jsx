import "./Dashboard.scss"
import { postCurrent } from "../../utils/api"
import {useParams} from "react-router-dom"

const API_URL = 'http://localhost:8080'

function Dashboard({ userData }) {
    let currentValue = 0;
    let prevValue = 0;
    const {id} = useParams()


    setInterval(() => {
        if (currentValue !== 0) {
            postCurrent(id, { current: currentValue })
                .then(res => {
                console.log(res)
                }).catch(err => {
                console.log(err)
            })
        }
    }, 3655500)

    const logout = () => {
        window.location = `${API_URL}/api/portfolio/logout`
    }

    return (
        <div className="dashboard">
            <section className="dashboard__top">
                <h2 className="dashboard__title">DASHBOARD</h2>
                <button className="dashboard__logout" onClick={logout}>Log out</button>
            </section>

            {
                userData.forEach(item => {
                    currentValue += item.valueInAsset * item.current_price
                    prevValue += item.assetValue
                })
            }
            <section className="dashboard__value">
                <p className={currentValue - prevValue > 0 ? "dashboard__profit" : "dashboard__loss"}>{currentValue - prevValue > 0 ? "Profit:  " : "Loss:  "}<span>${(currentValue - prevValue).toFixed(3)}</span></p>
            </section>
            <p className="dashboard__chart-text">Initial Investment: ${prevValue.toFixed(3)}</p>
            <p className="dashboard__chart-text">Current Value: ${currentValue.toFixed(3)}</p>
        </div>
    )
}

export default Dashboard
