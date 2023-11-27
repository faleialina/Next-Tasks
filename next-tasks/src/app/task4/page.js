export default function Task4() {
    return (
        <>
            <p>4. Создайте массив данных, представляющий элементы, которые вы хотите
                отобразить в списке используя map. ["New York", "London", "Tokyo", "Paris", "Berlin"]</p>
            <ul>
                {["New York", "London", "Tokyo", "Paris", "Berlin"].map(elem => <li>{elem}</li>)}
            </ul>
        </>
    )
}