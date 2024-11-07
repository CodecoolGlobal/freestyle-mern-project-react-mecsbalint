import { useState } from "react";

function Battle({playerCard, comparisonBase}) {
    function getAiChoiceActive(hand) {
        const lowerIsBetterProps = ['acceleration', 'consumption', 'weight'];
        const randomIndex = Math.floor(Math.random() * hand.length);
        const car = hand[randomIndex];
        const carRelativePosition = [
          {name: 'acceleration', rank: null},
          {name: 'topSpeed', rank: null},
          {name: 'cylinders', rank: null},
          {name: 'consumption', rank: null},
          {name: 'weight', rank: null},
          {name: 'horsepower', rank: null},
        ];
        carRelativePosition.forEach((prop, index) => {
          const handSorted = lowerIsBetterProps.includes(prop.name) ? hand.sort((a, b) => a[prop.name] - b[prop.name]) : hand.sort((a, b) => b[prop.name] - a[prop.name]);
          carRelativePosition[index].rank = handSorted.indexOf(car);
        });
        const comparisonBase = carRelativePosition.sort((a, b) => a.rank - b.rank)[0].name;
        return  {car: car, type: comparisonBase};
      }
    function getAiChoicePassive(hand, comparisonBase) {
        const lowerIsBetterProps = ['acceleration', 'consumption', 'weight'];
        const car = lowerIsBetterProps.includes(comparisonBase) ? hand.sort((a, b) => a[comparisonBase] - b[comparisonBase])[0] : hand.sort((a, b) => b[comparisonBase] - a[comparisonBase])[0];
        return car;
    }
    return (
        <h1>Heló</h1>
    )
}

export default Battle;
