import React from 'react'
import "./App.css"
import img from "./cover.jpg"
const Card = (props) => {
    const handleClick=() =>{
        props.handleChoice(props.card)
    }
    return (
        <div className={props.flipped ? "flipped" : ""} key={props.id}>
            <img className="card-front" src={props.src} alt="front"></img>
            <img className="card-back" src={img} onClick={handleClick} alt="back"></img>
        </div>
    )
}

export default Card
