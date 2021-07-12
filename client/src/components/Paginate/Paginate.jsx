import React from 'react'
import "./Paginate.scss"
import prev from "../../assets/icons/prev.svg"
import next from "../../assets/icons/next.svg"

function Paginate({pageChanger}) {
    return (
        <div className="paginate">
            <button className="paginate__prev" onClick={() => pageChanger(prev)}><img src={prev} />Previous</button>
            <button className="paginate__next" onClick={() => pageChanger(next)}>Next<img src={next} /></button>
        </div>
    )
}

export default Paginate
