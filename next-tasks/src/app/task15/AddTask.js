'use client'

import { useState } from "react";


export default function AddTask({ setButton}) {
    const [inpValue, setInpValue] = useState('')
    function showInp() {
        console.log(inpValue);
        setButton(inpValue)
    }
    function fillInp(event) {
        setInpValue(event.target.value);
    }
    return (
        <>
            <input type="text" onChange={fillInp} />

            <button onClick={showInp}>Click</button>
        </>
    )
}