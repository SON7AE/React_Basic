// Props와 State
// 동적으로 변하는 값인 리액트의 State 역시 일종의 값이므로 Props로 전달할 수 있다.

import { useState } from 'react'

function Viewer({ number }) {
    return <div>{number % 2 === 0 ? <h3>짝수</h3> : <h3>홀수</h3>}</div>
}

function Props_State() {
    const [number, setNumber] = useState(0)
    const onIncrease = () => {
        setNumber(number + 1)
    }
    const onDecrease = () => {
        setNumber(number - 1)
    }

    return (
        <div>
            <h2>{number}</h2>
            <Viewer number={number} />

            <div>
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </div>
    )
}

export default Props_State
