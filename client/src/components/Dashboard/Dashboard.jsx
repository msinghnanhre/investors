import "./Dashboard.scss"

function Dashboard({ userData }) {
    let currentValue = 0;
    let prevValue = 0;
    return (
        <div className="dashboard">
            <h2 className="dashboard__title">DASHBOARD</h2>
            {
                userData.map(item => {
                    currentValue += item.valueInAsset * item.current_price
                    prevValue += item.assetValue
                })
            }
            <section className="dashboard__value">
                <p className={currentValue - prevValue > 0 ? "dashboard__profit" : "dashboard__loss"}>{currentValue - prevValue > 0 ? "Profit:  " : "Loss:  "}<span>${(currentValue - prevValue).toFixed(3)}</span></p>
            </section>
            <p className="dashboard__chart-text">Initial Investment: ${currentValue.toFixed(3)}</p>
        </div>
    )
}

export default Dashboard
