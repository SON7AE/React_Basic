// Ref
// 리액트의 Ref를 이용하면 돔(DOM) 요소들을 직접 조작할 수 있다.
// Ref는 Reference의 줄임말로 참조라는 뜻이다.

// useRef 사용하기
// 리액트에서는 useRef라는 리액트 함수를 이용해 Ref 객체를 생성한다.

import React from 'react'
import { useState, useRef } from 'react'

function Ref() {
    const [text, setText] = useState('')
    const textRef = useRef()

    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleOnClick = () => {
        // alert(text)
        // // useRef로 입력 폼 초기화 하기
        // textRef.current.value = ''

        if (text.length < 5) {
            textRef.current.focus()
        } else {
            alert(text)
            // useRef로 입력 폼 초기화 하기
            setText('')
        }
    }

    return (
        <div>
            <input ref={textRef} type="text" value={text} onChange={handleOnChange} />
            <button onClick={handleOnClick}>작성 완료</button>
        </div>
    )
}

export default Ref
