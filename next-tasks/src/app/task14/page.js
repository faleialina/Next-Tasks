'use client'

import { useState } from "react"


export default function Task14() {
   const[value, setValue]= useState('')
    function show() {
        setValue('Это надпись')
    }
    function notshow() {
        setValue('')
    }
    return (
        <>
            <p>
                4. Напишите код для отображения всплывающего окна с сообщением при
                наведении на определенный элемент на странице. (onMouseEnter onMouseLeave)
            </p>
            <h1 >{value}</h1>
            <button onMouseDown={show} onMouseLeave={notshow}>Click</button>
        </>
    )
}