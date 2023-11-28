'use client'
import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Task8() {
    const [value, setValue] = useState('')

    async function getIp() {
        const res = await axios.get('https://api.ipify.org/?format=json')
        setValue(res.data.ip)
    }
    useEffect(() => {
        getIp()
    }, [])

    return (

        <>
            <p>8. Создайте компонент, который выполняет запрос к API
                https://api.ipify.org/?format=json и отображает полученные данные в заголовок.
                (решить задачу через клиентский компонент)</p>
            <p>{value}</p>
            <p>
                <Link href='/'>back</Link>
            </p>
        </>
    )
}