//81 total cards
//pool park mailbox barricade upgrade fence
//class function for cards to reduce continuous creation
class GameCard {
    constructor(number,power) {
        this.number = number;
        this.power = power;
    }
}

const cardsArr = [];

//3 1s, park, upgrade,fence
cardsArr.push(new GameCard(1,"park"));
cardsArr.push(new GameCard(1,"upgrade"));
cardsArr.push(new GameCard(1,"fence"));

//3 2s, park, upgrade, fence
cardsArr.push(new GameCard(2,"park"));
cardsArr.push(new GameCard(2,"upgrade"));
cardsArr.push(new GameCard(2,"fence"));

//4 3s, pool, mailbox, barricade, fence
cardsArr.push(new GameCard(3,"pool"));
cardsArr.push(new GameCard(3,"mailbox"));
cardsArr.push(new GameCard(3,"barricade"));
cardsArr.push(new GameCard(3,"fence"));

//5 4s, pool, park, mailbox, barricade, upgrade
cardsArr.push(new GameCard(4,"pool"));
cardsArr.push(new GameCard(4,"park"));
cardsArr.push(new GameCard(4,"mailbox"));
cardsArr.push(new GameCard(4,"barricade"));
cardsArr.push(new GameCard(4,"upgrade"));

//6 5s, park, park, upgrade, upgrade, fence, fence
cardsArr.push(new GameCard(5,"park"));
cardsArr.push(new GameCard(5,"park"));
cardsArr.push(new GameCard(5,"upgrade"));
cardsArr.push(new GameCard(5,"upgrade"));
cardsArr.push(new GameCard(5,"fence"));
cardsArr.push(new GameCard(5,"fence"));

//7 6s, pool, park, mailbox, barricade, upgrade, fence, fence
cardsArr.push(new GameCard(6,"pool"));
cardsArr.push(new GameCard(6,"park"));
cardsArr.push(new GameCard(6,"mailbox"));
cardsArr.push(new GameCard(6,"barricade"));
cardsArr.push(new GameCard(6,"upgrade"));
cardsArr.push(new GameCard(6,"fence"));
cardsArr.push(new GameCard(6,"fence"));

//8 7s, pool, park, park, mailbox, barricade, upgrade, upgrade, fence
cardsArr.push(new GameCard(7,"pool"));
cardsArr.push(new GameCard(7,"park"));
cardsArr.push(new GameCard(7,"park"));
cardsArr.push(new GameCard(7,"mailbox"));
cardsArr.push(new GameCard(7,"barricade"));
cardsArr.push(new GameCard(7,"upgrade"));
cardsArr.push(new GameCard(7,"upgrade"));
cardsArr.push(new GameCard(7,"fence"));

//9 8s, pool, park, park, mailbox, barricade, upgrade, upgrade, fence, fence
cardsArr.push(new GameCard(8,"pool"));
cardsArr.push(new GameCard(8,"park"));
cardsArr.push(new GameCard(8,"park"));
cardsArr.push(new GameCard(8,"mailbox"));
cardsArr.push(new GameCard(8,"barricade"));
cardsArr.push(new GameCard(8,"upgrade"));
cardsArr.push(new GameCard(8,"upgrade"));
cardsArr.push(new GameCard(8,"fence"));
cardsArr.push(new GameCard(8,"fence"));

//8 9s, pool, park, park, mailbox, barricade, upgrade, upgrade, fence
cardsArr.push(new GameCard(9,"pool"));
cardsArr.push(new GameCard(9,"park"));
cardsArr.push(new GameCard(9,"park"));
cardsArr.push(new GameCard(9,"mailbox"));
cardsArr.push(new GameCard(9,"barricade"));
cardsArr.push(new GameCard(9,"upgrade"));
cardsArr.push(new GameCard(9,"upgrade"));
cardsArr.push(new GameCard(9,"fence"));

//7 10s, pool, park, mailbox, barricade, upgrade, fence, fence
cardsArr.push(new GameCard(10,"pool"));
cardsArr.push(new GameCard(10,"park"));
cardsArr.push(new GameCard(10,"mailbox"));
cardsArr.push(new GameCard(10,"barricade"));
cardsArr.push(new GameCard(10,"upgrade"));
cardsArr.push(new GameCard(10,"fence"));
cardsArr.push(new GameCard(10,"fence"));

//6 11s, park, park, upgrade, upgrade, fence, fence 
cardsArr.push(new GameCard(11,"park"));
cardsArr.push(new GameCard(11,"park"));
cardsArr.push(new GameCard(11,"upgrade"));
cardsArr.push(new GameCard(11,"upgrade"));
cardsArr.push(new GameCard(11,"fence"));
cardsArr.push(new GameCard(11,"fence"));

//5 12s, pool, park, mailbox, barricade, upgrade
cardsArr.push(new GameCard(12,"pool"));
cardsArr.push(new GameCard(12,"park"));
cardsArr.push(new GameCard(12,"mailbox"));
cardsArr.push(new GameCard(12,"barricade"));
cardsArr.push(new GameCard(12,"upgrade"));

//4 13s, pool, mailbox, barricade, fence
cardsArr.push(new GameCard(13,"pool"));
cardsArr.push(new GameCard(13,"mailbox"));
cardsArr.push(new GameCard(13,"barricade"));
cardsArr.push(new GameCard(13,"fence"));

//3 14s, park, upgrade, fence
cardsArr.push(new GameCard(14,"park"));
cardsArr.push(new GameCard(14,"upgrade"));
cardsArr.push(new GameCard(14,"fence"));

//3 15s, park, upgrade, fence
cardsArr.push(new GameCard(15,"park"));
cardsArr.push(new GameCard(15,"upgrade"));
cardsArr.push(new GameCard(15,"fence"));

export default cardsArr;