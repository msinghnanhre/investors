import axios from "axios"


//api to grab data for chart from asset id
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


//details from coingecko when card from list of currencies clicked
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


//top trending from coingecko 
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

//post new asset to the database
export const postAsset = (id,data) => {
    return new Promise((resolve, reject) => {
        axios.post(`http://localhost:8080/api/portfolio/${id}`, { data })
            .then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
        })
     })
}

//grab portfolio from databasse when user log in

export const getPortfolio = (id) => {
    return new Promise((resolve, reject) => {
        axios.get(`http://localhost:8080/api/portfolio/${id}`)
            .then(res => {
            resolve(res)
            }).catch(err => {
            reject(err)
        })
    })
}

//delete asset from database

export const deleteAsset = (id, assetId) => {
    return new Promise((resolve, reject) => {
        axios.delete(`http://localhost:8080/api/portfolio/${id}/asset/${assetId}`)
            .then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
     })
}

//post current Value every 5 miutes for chart data
//post new asset to the database
export const postCurrent = (id, data) => {
    return new Promise((resolve, reject) => {
        axios.post(`http://localhost:8080/api/portfolio/currentValue/${id}`, { data })
            .then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
    })
}