/* eslint-disable react/prop-types */
import { useEffect } from "react";
import HeadLine from "./HeadLine";

function Encounter({onHandleEncounter, enemyScore, playerScore, playerSelectedCard, aiSelectedCard, category}) {
    useEffect(() => {
        onHandleEncounter();
    }, []);
    return (
        <>
        <HeadLine enemyScore={enemyScore} playerScore={playerScore}/>
        </>
    )
}

export default Encounter;
