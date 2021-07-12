import React from 'react'
import "./AddAsset.scss"

function AddAsset() {
    return (
        <div className="addAsset">
            <form className="addAsset__form">
                <input className="addAsset__form-input" type="text" name="search" placeholder="Search asset" />
                <input className="addAsset__form-submit" type="submit" value="Search"/>
            </form>
        </div>
    )
}

export default AddAsset
