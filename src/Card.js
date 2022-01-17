import React from 'react'
import "./App.css"
import img from "./cover.jpg"
const Card = (props) => {
    return (
        <div key={props.id}>
            <img className="card-front" src={props.src} alt="front"></img>
            <img className="card-back" src={img} alt="back"></img>
        </div>
    )
}

export default Card
