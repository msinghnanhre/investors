import React from 'react'
import "./AddAsset.scss"
import { useState, useRef } from "react"
import {coinDetail, postAsset} from "../../utils/api"


function AddAsset({userId, renderComponent}) {
    const [asset, setAsset] = useState("")
    const [value, setValue] = useState(0)
    const [error, setError] = useState(false)


    const assetRef = useRef()
    const valueRef= useRef()

    const onChange = () => {
        setAsset(assetRef.current.value)
        setValue(valueRef.current.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        const id = asset.toLowerCase()
        if (asset === "") {
            setError(true)
            return;
        }

        coinDetail(id)
            .then(res => {
                let valueInAsset = (value/res.data.market_data.current_price.usd)
                if (error) {
                    setError(false)
                }
                postAsset(userId, {
                    currencyName: asset,
                    value: value,
                    valueInAsset: valueInAsset,
                    img: res.data.image.small
                }, { withCredentials: true })
                    .then(res => {
                        console.log(res)
                    }).catch(err => {
                        console.log(err)
                    })
            }).catch(err => {
                console.log(err)
                setError(true)
        })
    }

    return (
        <>
            <div className="addAsset">
                <h1 className="addAsset__title">Add New Asset</h1>
                <p>Enter name of asset you want to add and value in $USD</p>
            <form className="addAsset__form" onSubmit={submitHandler}>
                    <input className="addAsset__form-input" ref={assetRef} onChange={onChange} type="text" name="asset" placeholder="Search asset" />
                    <span className={error ? "error": "valid"}>No Asset Exist with given Name</span>
                    <input className="addAsset__form-input" ref={valueRef} onChange={onChange} type="Number" name="value" placeholder="Value in $USD" />
                    <input className="addAsset__form-submit" type="submit" value="Add Asset" onClick={renderComponent}/>
            </form>
            </div>
        </>
    )
}

export default AddAsset
