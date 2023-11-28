"use client"
import Link from 'next/link'
import { useState } from 'react'
import style from './style.module.css'

export default function Task2() {

    const [obj, setObj] = useState({})
    function fillInput(event) {
        setObj({ ...obj, [event.target.name]: event.target.value })
    }
    function doChek() {

        if (!/^[a-zA-Z-_0-9]+@[a-z]+.[a-z]{2,10}/gm.test(obj.email) || !isNaN(obj.name) || !isNaN(obj.surname) || !obj.pass.length) {
            alert(false)
        }
        alert(true)
    }

    return (
        <>
            <p>2. Создайте форму для ввода имени, фамилии, адреса электронной почты и пароля.
                По клику на кнопку проверить вводимые данные на регулярные выражения. В
                случае успешной валидации – alert(true)
            </p>
            <div className={style.form}>
                <div>
                    <input type="text" placeholder='введите имя' name='name' onChange={fillInput} />
                </div>
                <div>
                    <input type="text" placeholder='введите фамилию' name='surname' onChange={fillInput} />
                </div>
                <div>
                    <input type="text" placeholder='введите адреса электронной почты' name='email' onChange={fillInput} />
                </div>
                <div>
                    <input type="text" placeholder='введите пароль' name='pass' onChange={fillInput} />
                </div>
                <div>
                    <button onClick={doChek}>Регистрация</button>
                </div>
            </div>
            <p>
                <Link href='/'>back</Link>
            </p>
        </>
    )
}