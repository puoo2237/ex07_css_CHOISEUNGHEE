import "../../styles/test.css"
function Test01() {
    const style = { color: "blue", fontSize: "30px" }
    return (<>
        <div style={style}>test01</div>
        <div style={{ color: "blue", fontSize: "30px" }}>test01</div>
        <div id="test_id" className="test">test01</div>
    </>)
}
export default Test01;