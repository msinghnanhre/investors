import React from 'react'
import { getPortfolio, deleteAsset } from "../../utils/api"
import { useState, useEffect} from "react"
import DoughnutChart from "../DoughnutChart/DoughnutChart"
import deleteBtn from "../../assets/icons/deleteBtn.svg"
import AddAsset from "../AddAsset/AddAsset"

import "./PortfolioList.scss"

function PortfolioList({userId, currencies}) {
  const [assets, setAssets] = useState([])
  const [isDeleted, setIsDeleted] = useState(false)
  const [isAdded, setIsAdded] = useState(false)

  let chartD = []
  
  useEffect(async () => {
    const portfolioAssets = await getPortfolio(userId);
    setAssets(portfolioAssets.data)

    setIsDeleted(false)
    setIsAdded(false)
    
  }, [isDeleted, isAdded])

  const deleteItem = (userId, assetId) => {
    deleteAsset(userId, assetId)
      .then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
    setIsDeleted(true)
  }

  const addAssetHandler = () => {
    setIsAdded(true)
  }
  
    if (assets=== []) {
        return <p>Loading ...</p>
    }
    return (
      <div className="portfolioList">
        <div className="portfolioList__addAsset">
          <AddAsset
            userId={userId}
            addAssetHandler={addAssetHandler}
            />
        </div>
        <div className="portfolioList__Itemswrapper">
        {assets.map(item => {
              const [first, ...rest] = [...item.currencyName]
                    return (
                        <section
                            key={item.id}
                            className="portfolioList__items"
                      >
                        <img className="portfolioList__delete" onClick={() => deleteItem(userId, item._id)} src={deleteBtn} alt="delete icon" />
                        <img className="portfolioList__img" src={item.img} alt="asset logo"/>
        
                          <section className="portfolioList__items-text">
                          <p >Coin: <span className="portfolioList__items-span">{first}</span>{rest}</p>
                          <p>No. of Coins: <span>{item.valueInAsset.toFixed(2)}</span></p>
      
                          {currencies.map(asset => {
                            if (asset.id === item.currencyName.replace(/ /g, "-")) {
                                        chartD.push({
                                          ...asset,
                                          valueInAsset: item.valueInAsset,
                                          assetValue: item.assetValue
                                        })
                                            return (
                                              <div key={asset.id}>
                                                <p>Current Price: $<span>{asset.current_price}</span></p>
                                                <span className={asset.current_price * item.valueInAsset - item.assetValue > 0 ? "portfolioList__profit" : "portfolioList__loss"}>
                                                  {asset.current_price * item.valueInAsset - item.assetValue > 0 ? "Profit: " : "Loss: "}
                                                  $USD {(asset.current_price * item.valueInAsset - item.assetValue).toFixed(3)}
                                                </span>
                                              </div>
                                            )
                                        }                                      
                                    })}
                        </section>
                      </section>
                    )
        })}
        </div>
        <div className="portfolioList__charts">
          <DoughnutChart chartData={chartD} />
        </div>
      </div>
    )
}

export default PortfolioList
