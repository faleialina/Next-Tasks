'use client'


export default function client({Input}) {
    function isShow() {
        alert('Hi')
    }
    return (
        <>
            <Input></Input>
            <Input></Input>
            <button onClick={isShow}>Click</button>


        </>
    )
}