import React from 'react'
import { getPortfolio, deleteAsset } from "../../utils/api"
import { useState, useEffect, useRef } from "react"
import DoughnutChart from "../DoughnutChart/DoughnutChart"
import deleteBtn from "../../assets/icons/deleteBtn.svg"

import "./PortfolioList.scss"

function PortfolioList({userId, currencies}) {
  const [assets, setAssets] = useState([])
  const [chartData, setChartData] = useState([])
  let chartD = []
  

  useEffect(async () => {
        const portfolioAssets = await getPortfolio(userId);
        setAssets(portfolioAssets.data)
  }, [])

  const deleteItem = (userId, assetId) => {

    deleteAsset(userId, assetId).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
  
    if (assets=== []) {
        return <p>Loading ...</p>
    }
    return (
        <div className="portfolioList">
            {assets.map(item => {
                    return (
                        <section
                            key={item.id}
                            className="portfolioList__items"
                      >
                        <img className="portfolioList__delete" onClick={() => deleteItem(userId, item._id)} src={deleteBtn} alt="delete icon" />
                        <img className="portfolioList__img" src={item.img} />
        
                            <section className="portfolioList__items-text">
                                <p>Coin: <span>{item.currencyName}</span></p>
                          <p>No. of Coins: <span>{item.valueInAsset.toFixed(2)}</span></p>
      
                                    {currencies.map(asset => {
                                      if (asset.id === item.currencyName) {
                                        chartD.push({
                                          ...asset,
                                          valueInAsset: item.valueInAsset,
                                          assetValue: item.assetValue
                                        })
                                            return (
                                              <>
                                                <p>Current Price: $<span>{asset.current_price}</span></p>
                                                <span className={asset.current_price * item.valueInAsset - item.assetValue > 0 ? "portfolioList__profit" : "portfolioList__loss"}>
                                                  {asset.current_price * item.valueInAsset - item.assetValue > 0 ? "Profit: " : "Loss: "}
                                                  $USD {(asset.current_price * item.valueInAsset - item.assetValue).toFixed(3)}
                                                </span>
                                                </>
                                            )
                                      }
                                      
                                    })}
                        </section>
                      </section>
                    )
            })}
        <div className="portfolioList__charts">
          <DoughnutChart chartData={chartD} />
        </div>
      </div>
    )
}

export default PortfolioList
