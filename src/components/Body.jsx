function Body() {
    // 상수 number를 선언하고 값 1을 지정한다.
    const number = 1

    const numA = 10
    const numB = 20

    const strA = '안녕?'
    const strB = '리액트!'

    return (
        <body>
            <h1>BODY COMPONENT</h1>
            {/* 상수 number의 값을 h2 태그로 감싸 렌더링한다. */}
            {/* 리액트에서 데이터를 표현하는 보간법은 중괄호 한 번만 사용한다. */}
            {/* 참고로 리액트 JSX에서는 객체 자료형을 지원하지 않는다. */}
            {/* 객체 자료형에 속하는 함수나 배열도 JSX 표현식으로 사용하면 오류가 발생한다. */}
            {/* 따라서, 이를 표현하고 싶으면 프로퍼티 접근 표기법으로 값을 원시 자료형으로 바꿔주어야 한다. */}
            <h2>{number}</h2>
            <h2>{numA + numB}</h2>
            <h2>{strA + strB}</h2>
        </body>
    )
}

export default Body
