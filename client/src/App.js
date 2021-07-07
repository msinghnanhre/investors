import './App.scss';
import { Component } from 'react'
import Login from "./components/Login/Login"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import CurrencyCard from "./components/CurrencyCard/CurrencyCard"
import axios from "axios"

class App extends Component {
  state = {
    currencyList: [],
    images: []
  }
  componentDidMount = () => {
    axios.get(`http://localhost:8080/api/currencyList`)
      .then(res => {
        this.setState({ currencyList: res.data})
      })
      .catch(err => {
        console.log(err)
      })
    axios.get("http://localhost:8080/api/currencyIcons")
      .then(res => {
        this.setState({
        images: res
        })
    })
  }
  render() {
    return (
      <BrowserRouter>
        <Header />

        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/explore" render={routeProps => {
            return <CurrencyCard
              {...routeProps}
              currencyList={this.state.currencyList}
              images={this.state.images}
            />
          } }/>
        </Switch>
      </BrowserRouter>
    );
  };

}

export default App;
