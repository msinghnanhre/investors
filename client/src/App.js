import './App.scss';
import { Component } from 'react'
import Login from "./components/Login/Login"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import CurrencyCard from "./components/CurrencyCard/CurrencyCard"
import axios from "axios"
import BarChart from "./components/BarChart"
import PieChart from "./components/PieChart/PieChart"

class App extends Component {
  state = {
    currencyList: null,
    images: []
  }
  componentDidMount = () => {
    axios.get(`http://localhost:8080/api/currencyList?page=2`)
      .then(res => {
        this.setState({ currencyList: res.data})
      })
      .catch(err => {
        console.log(err)
      })
    axios.get("http://localhost:8080/api/currencyIcons")
      .then(res => {
        console.log(res.data)
        this.setState({
        images: res.data
        })
    })
  }
  render() {
    if (!this.state.currencyList){
      return <p>Loading ...</p>
    }
    return (
      <BrowserRouter>
        <Header />
        {/* <BarChart /> */}
        
        <Switch>
          {/* <Route exact path="/" component={Login}/> */}
          <Route path="/explore" render={routeProps => {
            return <CurrencyCard
              {...routeProps}
              currencyList={this.state.currencyList ? this.state.currencyList: ""}
              images={this.state.images}
            />
          } }/>
        </Switch>
        {/* <PieChart /> */}
      </BrowserRouter>
    );
  };

}

export default App;
