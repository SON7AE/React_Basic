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

import HEADER from './components/Header'
import BODY from './components/Body'
import FOOTER from './components/Footer'

function App() {
    return (
        <div className="App">
            {/* 컴포넌트 이름의 첫 글자는 대문자로 작성하지 않아도 에러가 발생하지는 않는다.  */}
            {/* 그러나 정상적인 리액트 컴포넌트로 인식하지 않기 때문에 의도치 않은 결과가 나타날 수 있으며, 리액트가 제공하는 여러 유용한 기능도 사용할 수 없다. */}
            <HEADER />
            <BODY />
            <FOOTER />
        </div>
    )
}

export default App
