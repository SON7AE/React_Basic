function Footer({ children }) {
    const handleOnClick = () => {
        alert('버튼을 클릭하였습니다.')
    }
    return (
        <footer>
            <h1>FOOTER COMPONENT</h1>
            {children}
            {/* 리액트에서 클릭이벤트 이름은 'onClick' 이다. */}
            <button onClick={handleOnClick}>버튼</button>
        </footer>
    )
}

export default Footer
