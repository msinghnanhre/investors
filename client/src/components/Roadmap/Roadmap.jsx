import "./Roadmap.scss"

function Roadmap() {
    return (
        <div className="roadmap">
            <h3 className="roadmap__title">Roadmap</h3>
            <section className="roadmap__wrapper">
                <div className="roadmap__left"></div>
                <div className="roadmap__right">
                    <h4 className="roadmap__right-left done">Portfolio Assets Chart Analysis</h4>
                    <h4 className="roadmap__right-right">Login Support for Binance and Coinbase</h4>
                    <h4 className="roadmap__right-left">Support For wallet import from Binance </h4>
                    <h4 className="roadmap__right-right">Trading view chart analysis integration</h4>
                    <h4 className="roadmap__right-left">Metamask payment transfer integration</h4>
                    <h4 className="roadmap__right-right">Detailed analysis tools for Portfolio Asset</h4>
                </div>
            </section>
        </div>
    )
}

export default Roadmap
