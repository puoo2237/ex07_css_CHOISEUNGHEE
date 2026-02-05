import logo from './logo.svg';
import './App.css';
import IndexCon from './containers/IndexCon';
// import Test01 from './components/test/TestCom01';
// import Test02 from './components/test/TestCom02';
// import Test03 from './components/test/TestCom03';
import { Routes, Route } from "react-router-dom"
import LoginCon from './containers/LoginCon';
import RegCon from './containers/RegCon';
import ListCon from './containers/ListCon';
import ListOneCon from './containers/ListOneCon';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<IndexCon/>}></Route>
      <Route path="/login" element={<LoginCon/>}></Route>
      <Route path="/register" element={<RegCon/>}></Route>
      <Route path="/list" element={<ListCon/>}></Route>
      <Route path="/one/:id" element={<ListOneCon/>}></Route>
    </Routes>
    
    </>
  );
}

export default App;
