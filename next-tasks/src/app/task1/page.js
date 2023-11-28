import Link from 'next/link'
import style from './style.module.css'
export default function Task1() {
    return (
        <>
            <p>1. Создайте форму для ввода имени, фамилии, адреса электронной почты и пароля.</p>
            <div className={style.form}>
                <div>
                    <input type="text" placeholder='введите имя' />
                </div>
                <div>
                    <input type="text" placeholder='введите фамилию' />
                </div>
                <div>
                    <input type="text" placeholder='введите адреса электронной почты' />
                </div>
                <div>
                    <input type="text" placeholder='введите пароль' />
                </div>
                <div>
                    <button>Регистрация</button>
                </div>
            </div>
            <p>
                <Link href='/'>back</Link>
            </p>
        </>
    )
}