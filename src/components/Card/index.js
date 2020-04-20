import React from 'react'
import "./style.css"

export default function Card(props) {
    return (
        <div className="Card" onClick={props.onClick}>
            <p>{props.number} </p>
            <p>{props.power}</p>
        </div>
    )
}
