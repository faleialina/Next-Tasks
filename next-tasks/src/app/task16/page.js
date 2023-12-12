'use client'
import Link from "next/link";
import { useState } from "react";
import Calculator from "./Calculator";
import style from './style.module.css'

export default function Task16() {
    const [value, setValue] = useState('')
    const arr1 = [0, 1, 2, 3];
    const arr2 = [4, 5, 6, 7];
    const arr3 = [8, 9, '+', '*'];
    const arr4 = ['/', '-', '.', '00'];
    return (
        <>
            <p>
                6. Создайте калькулятор, который позволяет выполнять основные математические
                операции (сложение, вычитание, умножение, деление). Реализуйте два
                компонента. page.js: Содержит калькулятор. Calculator.js: Принимает введенные
                данные и выполняет математические операции для расчета итогового результата.
            </p>

            <div className={style.container}>
                <form action="">
                    <div className={style.display}>
                        <input type="text" value={value} />
                    </div>
                    <div className={style.calculator}>
                        <div>
                            {arr1.map((el) => <input type="button" value={el} onClick={e => setValue(value + e.target.value)} />)}
                        </div>
                        <div>
                            {arr2.map((el) => <input type="button" value={el} onClick={e => setValue(value + e.target.value)} />)}
                        </div>
                        <div>
                            {arr3.map((el) => <input type="button" value={el} onClick={e => setValue(value + e.target.value)} />)}
                        </div>
                        <div>
                            {arr4.map((el) => <input type="button" value={el} onClick={e => setValue(value + e.target.value)} />)}
                        </div>
                        <div>
                            <input type="button" value={"DE"} onClick={e => setValue(Calculator(value.slice(0, -1)))} />
                            <input type="button" value={"AC"} onClick={e => setValue('')} />
                            <input className={style.equal} type="button" value={"="} onClick={e => setValue(Calculator(value))} />

                        </div>
                    </div>
                </form>
            </div>

            <p>
                <Link href='/'>back</Link>
            </p>
        </>
    )
}