import './App.scss';
import { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import CurrencyCard from "./components/CurrencyCard/CurrencyCard"
import axios from "axios"
import Portfolio from "./components/Portfoliio/Portfolio"
import AssetDetail from "./components/AssetDetail/AssetDetail"
import Login from "./components/Login/Login"

const API_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

function App() {
  const [currencyList, setCurrencyList] = useState([])
  
  useEffect(() => {
    axios.get(`${API_URL}`)
      .then(res => {
        setCurrencyList(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

    return (
      <BrowserRouter>
        <Switch>
          <Route path="/explore" render={routeProps => {
            return <CurrencyCard
              {...routeProps}
              currencyList={currencyList ? currencyList : ""}
            />
          }} />
          <Route path="/portfolio/:id" render={routeProps => {
            return <Portfolio
              {...routeProps}
              currencyList={currencyList}
            />
          } } />
          <Route path="/:id/detail" render={routeProps => {
            return <AssetDetail
              currencies={currencyList}
              {...routeProps}
            />
          }} />
          <Route exact path="/" component={Login} />
        </Switch>
      </BrowserRouter>
    );
}

export default App;
