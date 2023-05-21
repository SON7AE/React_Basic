function Header(props) {
    // 부모 컴포넌트에서 전달된 객체 Props는 함수의 매개변수 형태로 저장된다.
    // 위 코드에선 props라는 이름의 매개변수에 저장된다.
    console.log(props)
    // 구조 분해 할당으로 여러 개의 값 사용하기
    // Props로 전달된 값이 많으면, 이 값을 사용할 때마다 객체의 점 표기법을 사용해야합니다.
    // 이 불편함을 해소하기 위해, Props는 객체이므로 구조 분해 할당하면 간편하게 필요한 데이터만 활용할 수 있다.

    // function Header({name, location})처럼 사용하면 더 간결하게 코드를 짤 수 있다.
    const { name, location } = props

    return (
        <header>
            <h1>HEADER COMPONENT</h1>
            <p>{props.name}</p>
            <p>{props.location}</p>

            <span>
                {name}은/는 {location}에 거주 중입니다.
            </span>
        </header>
    )
}

export default Header
