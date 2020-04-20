import React from 'react';
import House from "../House";
import "./style.css"

export default function Street({houses,clickHandler,clickable,streetNumber}) {
    return (
        <div className="Street">
            {houses.map(house=><House  key={house.id}houseData={house} clickHandler={clickHandler} clickable={clickable} streetNumber = {streetNumber}/>)}
        </div>
    )
}
