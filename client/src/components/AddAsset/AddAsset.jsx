import "./AddAsset.scss"
import { useState, useRef } from "react"
import { coinDetail, postAsset } from "../../utils/api"
import Particle from "../Particles/Particle"


function AddAsset({userId, addAssetHandler}) {
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

        let newId = id.replace(/ /g, "-");

        coinDetail(newId)
            .then(async res => {
                let valueInAsset = (value/res.data.market_data.current_price.usd)
                if (error) {
                    setError(false)
                } 
                await postAsset(userId, {
                    currencyName: asset.toLowerCase(),
                    value: value,
                    valueInAsset: valueInAsset,
                    img: res.data.image.small
                }, { withCredentials: true })
                    .then(res => {
                        console.log(res)
                        addAssetHandler()
                    }).catch(err => {
                        console.log(err)
                    })
            }).catch(err => {
                console.log(err)
                setError(true)
            })
        assetRef.current.value = ""
        valueRef.current.value = ""
    }

    return (
        <section className="addAssetWrapper">
            <Particle />
            <div className="addAsset">
                <h1 className="addAsset__title">Add New Asset</h1>
                <p>Enter name of asset you want to add and value in $USD</p>
                <form className="addAsset__form" onSubmit={submitHandler}>
                        <input className="addAsset__form-input" ref={assetRef} onChange={onChange} type="text" name="asset" placeholder="Search asset" />
                        <span className={error ? "error": "valid"}>No Asset Exist with given Name</span>
                        <input className="addAsset__form-input" ref={valueRef} onChange={onChange} type="Number" name="value" placeholder="Value in $USD" />
                        <button className="addAsset__form-submit" type="submit" value="Add Asset">Add Asset</button>
                </form>
            </div>
        </section>
    )
}

export default AddAsset
