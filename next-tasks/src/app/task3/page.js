'use client'
import { useState } from 'react';
import style from './style.module.css'

export default function Task3() {
    const [str, setStr] = useState('');
    function doInput(event) {
        setStr(event.target.value)
    }
    function doValue() {
        console.log(str);
    }
    return (
        <>
            <p>3. Создайте форму для ввода данных. По клику на кнопку получите данные из input  </p>
            <div className={style.form}>
                <div>
                    <input type="text" placeholder='введите данные' name='data' onChange={doInput} />
                </div>

                <div>
                    <button onClick={doValue}>Ввод</button>
                </div>
            </div>
        </>
    )
}