import React from 'react';
import Street from "./components/Street"
import ShowCards from './components/ShowCards'
import "./App.css"
import { useState, useEffect } from "react";
import cardsArr from "./data/cards"

//pools
//TODO: barricade
//TODO: parks
//TODO: mailbox
//TODO: upgrade
//TODO: goals
//TODO: allow failure to place
//TODO: scroing system
//TODO: actual array of cards
//TODO: FENCING!!! Oh boi



function App() {
  const powers = ["fence", "upgrade", "mailbox", "barricade", "pool", "park"];
  const [firstStreet, setFirstStreet] = useState([
    {
      id: 1,
      pool: false,
      chosen: false,
      number: null
    },
    {
      id: 2,
      pool: false,
      chosen: false,
      number: null
    },
    {
      id: 3,
      pool: true,
      chosen: false,
      number: null
    },
    {
      id: 4,
      pool: false,
      chosen: false,
      number: null
    },
    {
      id: 5,
      pool: false,
      chosen: false,
      number: null
    },
    {
      id: 6,
      pool: false,
      chosen: false,
      number: null
    },
    {
      id: 7,
      pool: true,
      chosen: false,
      number: null
    },
    {
      id: 8,
      pool: true,
      chosen: false,
      number: null
    },
    {
      id: 9,
      pool: false,
      chosen: false,
      number: null
    },
    {
      id: 10,
      pool: false,
      chosen: false,
      number: null
    },
  ]);
  const [secondStreet, setSecondStreet] = useState([
    {
      id: 1,
      pool: true,
      chosen: false,
      number: null
    },
    {
      id: 2,
      pool: false,
      chosen: false,
      number: null
    },
    {
      id: 3,
      pool: false,
      chosen: false,
      number: null
    },
    {
      id: 4,
      pool: true,
      chosen: false,
      number: null
    },
    {
      id: 5,
      pool: false,
      chosen: false,
      number: null
    },
    {
      id: 6,
      pool: false,
      chosen: false,
      number: null
    },
    {
      id: 7,
      pool: false,
      chosen: false,
      number: null
    },
    {
      id: 8,
      pool: true,
      chosen: false,
      number: null
    },
    {
      id: 9,
      pool: false,
      chosen: false,
      number: null
    },
    {
      id: 10,
      pool: false,
      chosen: false,
      number: null
    },
    {
      id: 11,
      pool: false,
      chosen: false,
      number: null
    },
  ]);
  const [thirdStreet, setThirdStreet] = useState([
    {
      id: 1,
      pool: false,
      chosen: false,
      number: null
    },
    {
      id: 2,
      pool: true,
      chosen: false,
      number: null
    },
    {
      id: 3,
      pool: false,
      chosen: false,
      number: null
    },
    {
      id: 4,
      pool: false,
      chosen: false,
      number: null
    },
    {
      id: 5,
      pool: false,
      chosen: false,
      number: null
    },
    {
      id: 6,
      pool: false,
      chosen: false,
      number: null
    },
    {
      id: 7,
      pool: true,
      chosen: false,
      number: null
    },
    {
      id: 8,
      pool: false,
      chosen: false,
      number: null
    },
    {
      id: 9,
      pool: false,
      chosen: false,
      number: null
    },
    {
      id: 10,
      pool: false,
      chosen: false,
      number: null
    },
    {
      id: 11,
      pool: true,
      chosen: false,
      number: null
    },
    {
      id: 12,
      pool: false,
      chosen: false,
      number: null
    },
  ])
  const [availableCards, setAvailableCards] = useState([

  ])
  const [firstCardsPile, setFirstCardsPile] = useState([]);
  const [secondCardsPile, setSecondCardsPile] = useState([]);
  const [thirdCardsPile, setThirdCardsPile] = useState([]);
  const [cardsClickable, setCardsClickable] = useState(true);
  const [housesClickable, setHousesClickable] = useState(false);
  const [currentNumber, setCurrentNumber] = useState(false);
  const [currentPower, setCurrentPower] = useState(false);
  const [placementError, setPlacementError] = useState(false);

  const shuffleCards = () => {
    let newFirstPile = [];
    let newSecondPile = [];
    let newThirdPile = [];
    for (let i = cardsArr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [cardsArr[i], cardsArr[j]] = [cardsArr[j], cardsArr[i]];
    }
    for (let i = 0; i < cardsArr.length; i++) {
      const thisCard = cardsArr[i];
      if (i % 3 === 0) {
        newFirstPile.push(thisCard);
      } else if (i % 3 === 1) {
        newSecondPile.push(thisCard);
      } else {
        newThirdPile.push(thisCard);
      }
    }
    setFirstCardsPile(newFirstPile);
    setSecondCardsPile(newSecondPile);
    setThirdCardsPile(newThirdPile);
    setAvailableCards([
      {
        number: newFirstPile[1].number,
        power: newFirstPile[0].power
      },
      {
        number: newSecondPile[1].number,
        power: newSecondPile[0].power
      },
      {
        number: newThirdPile[1].number,
        power: newThirdPile[0].power
      }
    ])
  }

  useEffect(shuffleCards, []);

  const handleCardClick = (number, power) => {
    // console.log(number);
    if (cardsClickable) {
      setCurrentNumber(number);
      setCurrentPower(power);
      setCardsClickable(false);
      setHousesClickable(true);
    }
  }


  const flipNextCard = () => {
    let newFirstPile = [...firstCardsPile];
    let newSecondPile = [...secondCardsPile];
    let newThirdPile = [...thirdCardsPile];
    newFirstPile.shift();
    newSecondPile.shift();
    newThirdPile.shift();
    if (newFirstPile.length === 1) {
      //TODO: maintain power from here, for now is lost
      shuffleCards()
    } else {
      setFirstCardsPile(newFirstPile);
      setSecondCardsPile(newSecondPile);
      setThirdCardsPile(newThirdPile);

      setAvailableCards([
        {
          number: newFirstPile[1].number,
          power: newFirstPile[0].power
        },
        {
          number: newSecondPile[1].number,
          power: newSecondPile[0].power
        },
        {
          number: newThirdPile[1].number,
          power: newThirdPile[0].power
        }
      ])
    }
  }
  //TODO: make sure click is valid,seperate function
  const isHouseClickAllowed = (house, street) => {
    if (currentPower === "pool") {
      return isValidNumber(house, street) && house.pool
    }
    return isValidNumber(house, street);
  }
  //make sure row doesnt have any bigger nubmers before or smaller numbers after
  const isValidNumber = (house, street) => {
    //check after current click
    let noBiggerNumbers = true
    for (let i = 0; i < house.id; i++) {
      const nextHouse = street[i];
      if (nextHouse.number && nextHouse.number >= currentNumber) {
        noBiggerNumbers = false;
        console.log("bigger number found")
      }
    }
    let noSmallerNumbers = true
    for (let i = house.id - 1; i < street.length; i++) {
      const nextHouse = street[i];
      if (nextHouse.number && nextHouse.number <= currentNumber) {
        noSmallerNumbers = false;
        console.log("smaller number found.")
      }
    }
    return noBiggerNumbers && noSmallerNumbers;
  }
  const updateHouseData = (street, id) => {
    for (let i = 0; i < street.length; i++) {
      const house = street[i];
      if (house.id === id) {
        if (isHouseClickAllowed(house, street)) {
          house.chosen = true;
          house.number = currentNumber;
          setCardsClickable(true);
          setHousesClickable(false);
          setCurrentNumber(false);
          setCurrentPower(false);
          flipNextCard();
          setPlacementError(false);
        } else {
          setPlacementError(true);
        }
      }

    }
  }
  const handleHouseClick = (street, id) => {
    let updatedStreet;
    switch (street) {
      case 1:
        updatedStreet = [...firstStreet];
        updateHouseData(updatedStreet, id);
        setFirstStreet(updatedStreet);
        break;

      case 2:
        updatedStreet = [...secondStreet];
        updateHouseData(updatedStreet, id);
        setSecondStreet(updatedStreet);
        break;

      case 3:
        updatedStreet = [...thirdStreet];
        updateHouseData(updatedStreet, id);
        setThirdStreet(updatedStreet);
        break;

      default:
        break;
    }
  }
  return (
    <div className="flexWrapper">
      <ShowCards cards={availableCards} clickable={cardsClickable} clickHandler={handleCardClick} />
      <div className="streets">
        {currentNumber && <p>currentNumber: {currentNumber}</p>}
        {currentPower && <p>currentPower: {currentPower}</p>}
        {placementError && <p>invalid placement, please try again.</p>}
        <Street houses={firstStreet} clickable={housesClickable} streetNumber={1} clickHandler={handleHouseClick} />
        <Street houses={secondStreet} clickable={housesClickable} streetNumber={2} clickHandler={handleHouseClick} />
        <Street houses={thirdStreet} clickable={housesClickable} streetNumber={3} clickHandler={handleHouseClick} />
      </div>
    </div>
  )
}

// class App extends React.Component {
//   state = {
//     firstStreet: [
//       {
//         id: 1,
//         pool: false,
//         chosen: false,
//         number: 1
//       },
//       {
//         id: 2,
//         pool: false,
//         chosen: false,
//         number: null
//       },
//       {
//         id: 3,
//         pool: true,
//         chosen: false,
//         number: null
//       },
//       {
//         id: 4,
//         pool: false,
//         chosen: false,
//         number: null
//       },
//       {
//         id: 5,
//         pool: false,
//         chosen: false,
//         number: null
//       },
//       {
//         id: 6,
//         pool: false,
//         chosen: false,
//         number: null
//       },
//       {
//         id: 7,
//         pool: true,
//         chosen: false,
//         number: null
//       },
//       {
//         id: 8,
//         pool: true,
//         chosen: false,
//         number: null
//       },
//       {
//         id: 9,
//         pool: false,
//         chosen: false,
//         number: null
//       },
//       {
//         id: 10,
//         pool: false,
//         chosen: false,
//         number: null
//       },
//     ],
//     secondStreet: [
//       {
//         id: 1,
//         pool: true,
//         chosen: false,
//         number: null
//       },
//       {
//         id: 2,
//         pool: false,
//         chosen: false,
//         number: null
//       },
//       {
//         id: 3,
//         pool: false,
//         chosen: false,
//         number: null
//       },
//       {
//         id: 4,
//         pool: true,
//         chosen: false,
//         number: null
//       },
//       {
//         id: 5,
//         pool: false,
//         chosen: false,
//         number: null
//       },
//       {
//         id: 6,
//         pool: false,
//         chosen: false,
//         number: null
//       },
//       {
//         id: 7,
//         pool: false,
//         chosen: false,
//         number: null
//       },
//       {
//         id: 8,
//         pool: true,
//         chosen: false,
//         number: null
//       },
//       {
//         id: 9,
//         pool: false,
//         chosen: false,
//         number: null
//       },
//       {
//         id: 10,
//         pool: false,
//         chosen: false,
//         number: null
//       },
//       {
//         id: 11,
//         pool: false,
//         chosen: false,
//         number: null
//       },

//     ],
//     thirdStreet: [
//       {
//         id: 1,
//         pool: false,
//         chosen: false,
//         number: null
//       },
//       {
//         id: 2,
//         pool: true,
//         chosen: false,
//         number: null
//       },
//       {
//         id: 3,
//         pool: false,
//         chosen: false,
//         number: null
//       },
//       {
//         id: 4,
//         pool: false,
//         chosen: false,
//         number: null
//       },
//       {
//         id: 5,
//         pool: false,
//         chosen: false,
//         number: null
//       },
//       {
//         id: 6,
//         pool: false,
//         chosen: false,
//         number: null
//       },
//       {
//         id: 7,
//         pool: true,
//         chosen: false,
//         number: null
//       },
//       {
//         id: 8,
//         pool: false,
//         chosen: false,
//         number: null
//       },
//       {
//         id: 9,
//         pool: false,
//         chosen: false,
//         number: null
//       },
//       {
//         id: 10,
//         pool: false,
//         chosen: false,
//         number: null
//       },
//       {
//         id: 11,
//         pool: true,
//         chosen: false,
//         number: null
//       },
//       {
//         id: 12,
//         pool: false,
//         chosen: false,
//         number: null
//       },
//     ],
//     availableCards: [
//       { number: Math.floor(Math.random() * 15) + 1 },
//       { number: Math.floor(Math.random() * 15) + 1 },
//       { number: Math.floor(Math.random() * 15) + 1 }
//     ],
//     cardsClickable: true,
//     housesClickable: false,
//     currentNumber: false
//   }

//   handleCardClick = number => {
//     this.setState({
//       currentNumber: number,
//       cardsClickable: false,
//       housesClickable: true
//     })
//   }


//   render() {
//     return (
//       <div className='flexWrapper'>
//         <ShowCards cards={this.state.availableCards} clickable={this.state.cardsClickable} clickHandler={this.handleCardClick} />
//         <div className="streets">
//           <Street houses={this.state.firstStreet} clickable={this.state.housesClickable} />
//           <Street houses={this.state.secondStreet} clickable={this.state.housesClickable} />
//           <Street houses={this.state.thirdStreet} clickable={this.state.housesClickable} />
//         </div>
//       </div>
//     );
//   }
// }

export default App;
