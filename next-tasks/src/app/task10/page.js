'use client'
import Link from "next/link";
import { useMemo, useState } from "react"

export default function Task10() {
    const [number, setNumber] = useState()
    const [value, setValue] = useState()
    function factorial(n) {
        return n ? n * factorial(n - 1) : 1;
    }
    useMemo(() => {
        setValue(factorial(number))
    }, [number]);
    console.log(number);
    return (
        <>
            <p>10. Создайте компонент, в котором пользователь может ввести число. Используйте
                useMemo, чтобы вычислить факториал введенного числа. Выведите результат
                факториала на странице.</p>
            <input type="text" onChange={(e) => setNumber(e.target.value)} />
            <p>{value}</p>
            <p>
                <Link href='/'>back</Link>
            </p>
        </>
    )
}