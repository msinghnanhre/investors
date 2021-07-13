import axios from "axios"

export const getChartData = (id) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`)
            .then(res => {
            resolve(res)
            })
            .catch(err => {
            reject(err)
        })
    })
}

export const coinDetail = (id) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
            .then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
        })
    })
}

export const trending = () => {
    return new Promise((resolve, reject) => {
        axios.get(`https://api.coingecko.com/api/v3/search/trending`)
            .then(res => {
            resolve(res)
            })
            .catch(err => {
            reject(err)
        })
    })
}

export const postUser = () => {
    return new Promise((resolve, reject) => {
        axios.post(`http://localhost:8080/api/portfolio`)
     })
}