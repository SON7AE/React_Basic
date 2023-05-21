import React from 'react'
import { useState } from 'react'

function State() {
    // useState는 리액트가 제공하는 State를 만드는 함수이다. State를 만들기 위해 useState를 react 라이브러리에서 불러온다.
    // 함수 useState는 인수로 State의 초깃값을 전달한다. 코드에서는 초깃값으로 0을 전달한다.
    // 그 결과 State 변수 count와 set함수 setCount를 반환한다.

    // 1. set함수로 State 값 변경하기
    // 이번에는 set 함수를 호출해 State 값을 변경해보자.
    // 컴포넌트에서 버튼을 하나 만들고, 버튼을 클릭할 때마다 State(count) 값을 1씩 늘려보자.

    // 2. State로 사용자 입력 관리하기
    // 2.1 <input> 태그로 텍스트 입력하기
    // 처음 다룰 입력 폼은 텍스트, 전화번호, 날짜, 체크박스 등 여러 형식의 정보를 입력할 수 있는 <input> 태그가 만드는 폼이다.
    // <input> 태그로 텍스트를 입력하는 폼을 하나 만들고, 사용자가 텍스트를 입력할 때마다 콘솔에 출력하는 이벤트 핸들러를 구현해보자.
    // State를 하나 만들고 사용자가 폼에서 입력할 때마다 테스트를 State 값으로 저장해보자.
    const [count, setCount] = useState(0)
    const onIncrease = () => {
        setCount(count + 1)
    }

    // 빈 문자열을 초깃값으로 하는 State 변수 text를 생성한다.
    // 폼에 입력한 텍스트를 변경할 때마다 set 함수를 호출해 text 값을 현재 입력한 텍스트로 변경한다.
    // <input> 태그의 value 속성에 State 변수 text를 설정한다.
    // 변수 text의 값을 페이지에 렌더링한다.
    const [text, setText] = useState('')
    const handleOnChange = (event) => {
        console.log(event.target.value)
        setText(event.target.value)
    }

    // 2.2 <input> 태그로 날짜 입력하기
    const [date, setDatte] = useState('')
    const handleOnChangeDate = (event) => {
        console.log('변경된 값: ', event.target.value)
        setDatte(event.target.value)
    }

    // 2.3 드랍다운 상자로 여러 옵션 중에 하나 선택하기
    const [option, setOption] = useState('')
    const handleOnChangeOption = (event) => {
        console.log('변경된 값: ', event.target.value)
        setOption(event.target.value)
    }

    // 여러 개의 사용자 입력 관리하기
    const [name, setName] = useState('')
    const [gender, setGender] = useState('')
    const [birth, setBirth] = useState('')
    const [bio, setBio] = useState('')

    const onChangeName = (event) => {
        setName(event.target.value)
    }
    const onChangeGender = (event) => {
        setGender(event.target.value)
    }
    const onChangeBirth = (event) => {
        setBirth(event.target.value)
    }
    const onChangeBio = (event) => {
        setBio(event.target.value)
    }

    // 위 코드를 클린하게 / 간결하게 고쳐보자.
    const [state, setState] = useState({
        name: '',
        gender: '',
        birth: '',
        bio: '',
    })
    const handleOnChangeState = (event) => {
        console.log('현재 수정 대상: ', event.target.name)
        console.log('수정 값: ', event.target.value)

        setState({
            ...state,
            [event.target.name]: event.target.value,
        })
    }

    return (
        <React.Fragment>
            <div>{count}</div>
            <button onClick={onIncrease}>+</button>
            <input type="text" value={text} onChange={handleOnChange} />
            <span>{text}</span>
            <input type="date" value={date} onChange={handleOnChangeDate} />
            <select value={option} onChange={handleOnChangeOption}>
                <option key={'1번'}>1번</option>
                <option key={'2번'}>2번</option>
                <option key={'3번'}>3번</option>
            </select>
            {/* State 코드 */}
            <div>
                <input type="text" value={name} onChange={onChangeName} placeholder="이름" />
            </div>
            <div>
                <select value={gender} onChange={onChangeGender}>
                    <option key={''}></option>
                    <option key={'남성'}>남성</option>
                    <option key={'여성'}>여성</option>
                </select>
            </div>
            <div>
                <input type="date" value={birth} onChange={onChangeBirth} />
            </div>
            <div>
                <textarea type="text" value={bio} onChange={onChangeBio} />
            </div>
            {/* 간결한 State를 위한 코드 */}
            {/* 1. 객체 자료형으로 State를 하나 생성하고 초깃값을 설정한다. State 변수인 객체 state의 초깃값은 모두 공백 문자열이다. */}
            {/* 2. 모든 입력 폼에서 name 속성을 지정한다. 예를 들어 이름을 입력하는 <input> 태그의 name 속성은 "name"으로 지정한다. */}
            {/* 3. 모든 입력 폼의 value 속성에는 state.name을 지정하는데, 객체 state의 name프로퍼티와 동일한 값으로 설정한다. 나머지 태그에도 value 속성을 이같이 변경한다. */}
            {/* 4. 사용자의 입력을 처리할 이벤트 핸들러를 설정한다. 나머지 태그에도 동일하게 설정한다. */}
            <div>
                <div>
                    <input type="text" name="name" value={state.name} onChange={handleOnChangeState} placeholder="이름" />
                </div>
                <div>
                    <select value={state.gender} name="gender" onChange={handleOnChangeState}>
                        <option key={''}></option>
                        <option key={'남성'}>남성</option>
                        <option key={'여성'}>여성</option>
                    </select>
                </div>
                <div>
                    <input type="date" name="birth" value={state.birth} onChange={handleOnChangeState} />
                </div>
                <div>
                    <textarea type="text" name="bio" value={state.bio} onChange={handleOnChangeState} />
                </div>
            </div>
        </React.Fragment>
    )
}

export default State
