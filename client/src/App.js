import './App.scss';
import { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import CurrencyCard from "./components/CurrencyCard/CurrencyCard"
import axios from "axios"
import Portfolio from "./components/Portfoliio/Portfolio"
import AssetDetail from "./components/AssetDetail/AssetDetail"
import Footer from "./components/Footer/Footer"

const API_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

function App() {
  const [currencyList, setCurrencyList] = useState([])
  const [modalDisplay, setModalDisplay] = useState(false)
  
  useEffect(() => {
    axios.get(`${API_URL}`)
      .then(res => {
        setCurrencyList(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  //modal display function
  const loginModalDisplay = () => {
    setModalDisplay(!modalDisplay)
  }
  
    return (
      <BrowserRouter>
        <Header modalDisplay={loginModalDisplay}/>
        
        <Switch>

          <Route path="/explore" render={routeProps => {
            return <CurrencyCard
              {...routeProps}
              currencyList={currencyList ? currencyList : ""}
              modalDisplay={modalDisplay}
              modalClick={loginModalDisplay}
            />
          }} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/:id/detail" render={routeProps => {
            return <AssetDetail
              currencies={currencyList}
              {...routeProps}
            />
          }}  />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
}

export default App;
