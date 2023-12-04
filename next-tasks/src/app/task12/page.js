
import Client from "./client";
import Input from "./Input";


export default function Task12() {
   
    return (
        <>
            <p>
2. Реализуйте два компонента (серверный, клиентский). Первый – input.js, второй –
page.js. input.js содержит статичный input. Страница page.js содержит форму из
двух компонентов Input.js и кнопки, по нажатию на которую появляется alert с
сообщением ‘click’.
</p>
<Client input = {Input}></Client>
        </>
    )
}