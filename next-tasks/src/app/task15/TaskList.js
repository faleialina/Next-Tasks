'use client'

import { useEffect, useState } from "react"

export default function TaskList({ button }) {
    const [arr, setArr] = useState(['aaaa', 'bbbb', 'cccc'])
    useEffect(() => {
        setArr([...arr, button])
    }, [button])
    return (
        <>
            <div> {arr.map((el) => <p>{el}</p>)}</div>
        </>
    )
}