import { useState } from "react";

function Battle({playerCard, comparisonBase}) {
    
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
