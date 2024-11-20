import express from "express";
import Car from "../model/Car.js";
const router = express.Router();

function drawCardIndexes(drawnCardNumbers) {
  const randomNumbers = [];
  while (randomNumbers.length < drawnCardNumbers) {
    let randomNumber = Math.floor(Math.random() * 30);
    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
    }
  }
  return randomNumbers;
}

async function findAllCards() {
  const data = await Car.find();
  return data;
}

router.get("/api/cards", async (req, res) => {
  const allCards = await findAllCards();
  const drawnCardsIndexes = drawCardIndexes(20);
  const yourHand = [];
  const aiHand = [];
  const yourTalon = [];
  const aiTalon = [];
  for (let i = 0; i < drawnCardsIndexes.length; i++) {
    let cardIndex = drawnCardsIndexes[i];
    if (i < drawnCardsIndexes.length / 4) {
      yourHand.push(allCards[cardIndex]);
    } else if (
      i >= drawnCardsIndexes.length / 4 &&
      i < drawnCardsIndexes.length / 2
    ) {
      aiHand.push(allCards[cardIndex]);
    } else if (
      i >= drawnCardsIndexes.length / 2 &&
      i < (drawnCardsIndexes.length / 4) * 3
    ) {
      yourTalon.push(allCards[cardIndex]);
    } else {
      aiTalon.push(allCards[cardIndex]);
    }
  }
  const cardsToSend = {
    playerCards: yourHand,
    aiCards: aiHand,
    playerDeck: yourTalon,
    aiDeck: aiTalon,
  };
  res.json(cardsToSend);
});

export default router;
