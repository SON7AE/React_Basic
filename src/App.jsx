// 함수를 이용해 Header라는 이름의 컴포넌트를 App 컴포넌트 밖에서 만든다.
// Header 컴포넌트는 HTML을 반환한다. 여러줄로 이우러진 HTML을 반환할 때는 return 문에서 반환할 HTML을 소괄호로 감싼 다음 세미콜론(;)을 꼭 붙여주어야 한다.
// 아래처럼 화살표 함수를 통해 컴포넌트를 만들 수도 있다.
// 컴포넌트의 이름은 항상 대문자로 시작한다.

const Header = () => {
    return (
        <header>
            <h1>Header</h1>
        </header>
    )
}

// JSX란?
// 리액트에서 컴포넌트는 자바스크립트 함수로 만드는데, 특이하게도 이 함수는 HTML 값을 반환한다.
// 이렇듯 자바스크립트와 HTML 태그를 섞어 사용하는 문법을 JSX(자바스크립트 XML)라고 한다.
// JSX는 자바스크립트의 확장 문법이고, 공식적인 자바스크립트 문법은 아니다.
// JSX는 대다수 리액트 개발자가 사용하는 문법이며, 리액트 공식 문서의 예제로도 사용한다. 적극 권장한다.

// JSX 문법에서 지켜야 할 것들
// JSX를 사용해 리액트 컴포넌트를 생성할 때, 반드시 지켜야 할 문법들이 있다.

// 1. 닫힘 규칙
// 닫힘 규칙은 아주 간단한 규칙이다. JSX의 모든 태그는 여는 태그가 있으면 반드시 닫는 태그도 있어야 한다는 규칙이다.
// JSX 문법 오류가 발생하면 비주얼 스튜디오 코드에서는 붉은 밑줄로 오류가 있다고 표시한다.

// 2. 최상위 태그 규칙
// JSX가 반환하는 모든 태그는 반드시 최상위 태그로 감싸야 한다.
// HTML 태그를 최상위 태그로 사용하지 않으려면, <React.Fragment> 태그를 사용하면 된다.
// <React.Fragment>로 다른 태그를 감싸면 최사위 태그를 대체하는 효과가 있다. 단, 페이지에서 <React.Fragment> 태그는 랜더링 되지 않는다.
// <React.Fragment> 태그 대신 '<></>' 빈 태그를 사용할 수도 있다.

// ----------------------------------------------------------------------------------------------------

// 컴포넌트에 값 전달하기
// 리액트 앱을 만들다 보면 컴포넌트가 다른 컴포넌트에 값을 전달해야 하는 상황이 빈번하다.
// 이때 활용할 수 있는 것이 Props 이다.

// Props란?
// 리액트에서는 부모가 자식 컴포넌트에 단일 객체 형태로 값을 전달할 수 있다.
// 이 객체를 리액트에서는 Props(Properties)라고 한다. Props는 Properties의 약자이다.
// 리액트의 컴포넌트와 Props를 샌드위치 제조에 비유한다면 샌드위치의 겉을 둘러싸고 있는 빵은 컴포넌트이고, 샌드위치의 속은 Props와 같다.
// 보통 리액트에서 컴포넌트에 값을 전달하는 경우는 세부사항들, 즉 컴포넌트의 속성을 지정하는 경우가 대부분이다.
// 따라서 컴포넌트에 값을 전달하는 속성들이라는 점에서 Properties라고 부르며, 이를 간단히 Props라고 한다.
// Props는 부모컴포넌트만이 자식 컴포넌트로 전달할 수 있다.

// ----------------------------------------------------------------------------------------------------

// 이벤트 처리하기
// 이벤트란 웹 페이지에서 일어하는 사용자의 행위이다.
// 버튼 클릭, 페이지 스크롤, 새로고침 등이 이런 행위에 속한다. 따라서 사용자가 버튼을 클릭하면 버튼 클릭 이벤트, 텍스트를 입력하면 텍스트 변경 이벤트가 발생했다고 표현한다.

// 1. 이벤트 핸들링과 이벤트 핸들러
// 이벤트 핸들링은 이벤트가 발생하면 특정 코드가 동작하도록 만드는 작업이다.
// 버튼을 클릭했을 때, 경고 대화상자를 브라우저에 표시하는 동작이 이벤트 핸들링의 대표적인 예이다.

// 2. 리액트의 이벤트 핸들링
// 리액트에서는 어떻게 이벤트를 핸들링하는지 살펴보자.

// ----------------------------------------------------------------------------------------------------

// 컴포넌트와 상태

// 1. State 이해하기
// State는 상태라는 뜻이다. 상태는 어떤 사물의 형편이나 모양을 일컫는 말로 일상생활에서도 흔히 사용한다.

// 2. State의 기본 사용법
// useState로 State 생성하기
// 리액트에서는 함수 useState로 State를 생성한다. useState의 문법은 다음과 같다.

// const [light, seLight] = useState("off")

// useState를 호출하면 2개의 요소가 담긴 배열을 반환한다.
// 이때 배열의 첫 번째 요소 light는 현재 상태의 값을 저장하고 있는 변수이다. 이 변수는 'State 변수'라고 부른다.
// 다음으로 두 번째 요소인 setLight는 State 변수의 값을 변경하는 즉, 상태를 업데이트하는 함수이다. 이 함수를 'set함수'라고 부른다.
// useState를 호출할 때 인수로 값을 전달하면 이 값이 State의 초깃값이 된다.
// 위 코드에서 'off'를 전달했으므로 State 변수 light의 초깃값은 off가 된다.

import HEADER from './components/Header'
import BODY from './components/Body'
import STATE from './components/State'
import FOOTER from './components/Footer'

function ChildComp() {
    return <div>Child Component</div>
}

function App() {
    const name = '마르코'
    const location = '서울'
    // Body 컴포넌트에서 Props로 전달할 값을 객체 BodyProps로 만든다.
    const bodyProps = {
        name: 'React',
        age: 2013,
        food: ['파스타', '빵', '떡볶이'],
    }

    return (
        <div className="App">
            {/* 컴포넌트 이름의 첫 글자는 대문자로 작성하지 않아도 에러가 발생하지는 않는다.  */}
            {/* 그러나 정상적인 리액트 컴포넌트로 인식하지 않기 때문에 의도치 않은 결과가 나타날 수 있으며, 리액트가 제공하는 여러 유용한 기능도 사용할 수 없다. */}
            {/* Props를 전달하려는 자식 컴포넌트 태그에서 '이름={값}' 형식으로 작성하면 된다. */}
            <HEADER name={name} location={location} />
            {/* 스프레드 연산자로 객체 BodyProps 각각의 프로퍼티를 Props로 전달하게 된다. */}
            <BODY {...bodyProps} />
            <STATE />
            <FOOTER>
                {/* 1. ChildComp라는 새로운 컴포넌트를 만든다. */}
                {/* ChildComp를 Footer 컴포넌트의 자식요소로 배치한다. */}
                {/* 리액트에서는 자식 컴포넌트에 또 다른 컴포넌트를 배치하면, 배치된 컴포넌트는 자동으로 Props의 children 프로퍼티에 저장되어 전달된다. */}
                <ChildComp />
            </FOOTER>
        </div>
    )
}

export default App
