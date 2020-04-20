import React from 'react';
import Card from "../Card"

export default function ShowCards({cards,clickHandler}) {
    return (
        <div>
            {cards.map((card,idx)=><Card key = {idx} number={card.number}  power = {card.power} onClick={()=>clickHandler(card.number,card.power)}/>)}
        </div>
    )
}
