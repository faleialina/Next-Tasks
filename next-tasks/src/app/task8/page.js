import { useState } from "react"

export default function Task8() {
    const [value, setValue] = useState('')
    
    return (

        <>
            <p>8. Создайте компонент, который выполняет запрос к API
                https://api.ipify.org/?format=json и отображает полученные данные в заголовок.
                (решить задачу через клиентский компонент)</p>
            <p></p>
        </>
    )
}