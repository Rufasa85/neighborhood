import React from 'react';
import "./style.css";
import Pool from '../Pool'

export default function House(props) {
    return (
        <div className="House" onClick={()=>{props.clickHandler(props.streetNumber,props.houseData.id)}}>
            {props.houseData.pool &&<Pool/>}
            {props.houseData.number&&<h3>{props.houseData.number}</h3>}
        </div>
    )
}
