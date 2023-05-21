import React from 'react'
import '../assets/styles/body.css'

function Body({ namge, age, food }) {
    // 상수 number를 선언하고 값 1을 지정한다.
    const number = 99

    const numA = 10
    const numB = 20

    const strA = '안녕?'
    const strB = '리액트!'

    return (
        <React.Fragment>
            <div>React.Fragment 태그 사용 테스트</div>
            <div>
                <h1>BODY COMPONENT</h1>
                {/* 상수 number의 값을 h2 태그로 감싸 렌더링한다. */}
                {/* 리액트에서 데이터를 표현하는 보간법은 중괄호 한 번만 사용한다. */}
                {/* 참고로 리액트 JSX에서는 객체 자료형을 지원하지 않는다. */}
                {/* 객체 자료형에 속하는 함수나 배열도 JSX 표현식으로 사용하면 오류가 발생한다. */}
                {/* 따라서, 이를 표현하고 싶으면 프로퍼티 접근 표기법으로 값을 원시 자료형으로 바꿔주어야 한다. */}
                <h2>{number}</h2>
                <h2>{numA + numB}</h2>
                <h2>{strA + strB}</h2>
            </div>

            {/* 2. 조건부 렌더링 */}
            <h2>
                {number}은(는) {number % 2 === 0 ? '짝수' : '홀수'}입니다.
            </h2>
            {/* 3. JSX 스타일링 */}
            {/* 인라인 스타일링이란 JSX 문법 중 하나로 HTML의 style 속성을 이용해 직접 스타일을 정의하는 방법이다. */}
            {/* JSX의 인라인 스타일링은 style={{ 스타일 규칙들 }}과 같은 문법으로 작성한다. */}
            {/* 문자열로 작성하는 HTML의 인라인 스타일링과는 달리 JSX의 인라인 스타일링은 객체를 생성한 다음 각각의 스타일을 프로퍼티 형식으로 작성한다. */}
            {/* 또한, 리액트의 JSX는 backgroud-color처럼 CSS에서 속성을 표시할 때 사용하는 스네이크 케이스 표기법 대신 backgroundColor와 같이 카멜표기법으로 작성해야한다. */}
            <div style={{ backgroundColor: 'red', color: 'blue' }}>
                <h1>JSX Inline Styling Test Code</h1>
            </div>
            {/* class가 자바스크립트의 예약어이기 때문에 className이라는 네이밍을 활용한다. */}
            <div className="body">
                <h1>JSX Import Styling Test Code</h1>
            </div>
            {/* Props 테스트 */}
            {food}
        </React.Fragment>
    )
}
// Body 컴포넌트가 받을 Props에서 food의 기본 값을 빈 배열로 설정한다.
Body.defaultProps = {
    food: [],
}

export default Body
