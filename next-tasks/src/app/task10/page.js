import { useMemo, useState } from "react"

export default function Task10() {
    const[number, setNum]=useState()
    useMemo(()=>{
function factorial(n) {
    return n?n*factorial(n-1):1
}
    }, [])
    return (
        <>
            <p>10. Создайте компонент, в котором пользователь может ввести число. Используйте
useMemo, чтобы вычислить факториал введенного числа. Выведите результат
факториала на странице.</p>
<input type="text" onClick={()=>setNum(e.target.value)}/>
<p>{number}</p>
        </>
    )
}