/* eslint-disable react/prop-types */
import { useEffect } from "react";
import HeadLine from "./Headline/HeadLine";

function Encounter({onHandleEncounter}) {

    return (
        <>
        <h1>Encounter test</h1>
        <button type="button" onClick={onHandleEncounter}>Fight</button>
        </>
    )
}

export default Encounter;
