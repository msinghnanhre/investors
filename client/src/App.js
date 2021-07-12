import './App.scss';
import { Component } from 'react'
// import Login from "./components/Login/Login"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import CurrencyCard from "./components/CurrencyCard/CurrencyCard"
import axios from "axios"
import BarChart from "./components/BarChart"
import PieChart from "./components/PieChart/PieChart"
import Portfolio from "./components/Portfoliio/Portfolio"

class App extends Component {
  state = {
    currencyList: null,
    images: [],
    page: 1,
    modalDisplay: false
  }
  componentDidMount = () => {
    axios.get(`http://localhost:8080/api/currencyList?page=1`)
      .then(res => {
        this.setState({
          currencyList: res.data
        })
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

  pageChanger = (name) => {
    if (name === "prev" && this.state.page > 1) {
      this.setState({
        page: this.state.page-1
      })
      axios.get(`http://localhost:8080/api/currencyList?page=1`)
        .then(res => {
          this.setState({
            currencyList: res.data
          })
        })
        .catch(err => {
          console.log(err)
        })
    } else if (name === "next") {
      this.setState({
        page: this.state.page+1
      })
      axios.get(`http://localhost:8080/api/currencyList?page=2`)
        .then(res => {
          this.setState({
            currencyList: res.data
          })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }

  //modal display function
  modalDisplay = () => {
    this.setState({
      modalDisplay: !this.state.modalDisplay
    })
  }

  render() {
    if (!this.state.currencyList || !this.state.images){
      return <p>Loading ...</p>
    }
    return (
      <BrowserRouter>
        <Header modalDisplay={this.modalDisplay}/>
        {/* <BarChart /> */}
        
        <Switch>
          {/* <Route exact path="/" component={Login}/> */}
          <Route path="/explore" render={routeProps => {
            return <CurrencyCard
              {...routeProps}
              currencyList={this.state.currencyList ? this.state.currencyList : ""}
              images={this.state.images}
              pageChnager={this.pageChanger}
              modalDisplay={this.state.modalDisplay}
              modalClick={this.modalDisplay}
            />
          }} />
          <Route path="/portfolio" component={Portfolio}/>
        </Switch>
        {/* <PieChart /> */}
      </BrowserRouter>
    );
  };

}


// AIzaSyBe0F7EA6VzJDRWmsmL7mUvPTBux1jMNU8
export default App;
