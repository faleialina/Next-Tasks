import Input from "./Input";



export default function Task11() {

    return (
        <>
            <p>1. Реализуйте два серверных компонента. Первый – Input.js, второй – page.js. Input.js
                содержит статичный input. Страница page.js содержит форму из двух компонентов
                Input.js и кнопки.
            </p>
            <Input></Input>
            <Input></Input>
            <button>Click</button>
        </>
    )
}