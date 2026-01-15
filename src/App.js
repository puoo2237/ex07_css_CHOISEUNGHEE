import logo from './logo.svg';
import './App.css';
import IndexCon from './containers/IndexCon';
// import Test01 from './components/test/TestCom01';
// import Test02 from './components/test/TestCom02';
// import Test03 from './components/test/TestCom03';
import { Routes, Route } from "react-router-dom"
import LoginCon from './containers/LoginCon';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<IndexCon/>}></Route>
      <Route path="/login" element={<LoginCon/>}></Route>
    </Routes>
    
    </>
  );
}

export default App;
