'use client'
export default function Task5() {
    function show(event) {
        console.log(event.target.textContent);
    }
    return (
        <>
            <p>5. Создайте массив данных, представляющий элементы, которые вы хотите
                отобразить в списке используя map. ["New York", "London", "Tokyo", "Paris", "Berlin"].
                Добавить событие клика с распознаванием на какой именно li был совершен клик
            </p>
            <ul >
                {["New York", "London", "Tokyo", "Paris", "Berlin"].map((elem, i) => <li onClick={show} key={i}>{elem}</li>)}
            </ul>
        </>
    )
}