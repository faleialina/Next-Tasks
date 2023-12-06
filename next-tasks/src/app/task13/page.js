'use client'
import Link from "next/link";
import { useState } from "react"



export default function Task13() {
    const arr = ['Alina', 'Anna', 'Nona', 'Tom']
    const [value, setValue]=useState('');
    function random() {
        let item = arr[Math.floor(Math.random()*arr.length) ]
        setValue(item)
    }
    
    return (
        <>
            <p>
                3. Напишите скрипт, который при нажатии на кнопку будет выводить случайное
                сообщение из заранее заданного списка.

            </p>
            <button onClick={random}>Click</button>
            <p>{value}</p>
            <p>
                <Link href='/'>back</Link>
            </p>
        </>
    )
}