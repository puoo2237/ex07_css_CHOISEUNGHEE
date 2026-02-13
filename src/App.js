import logo from './logo.svg';
import './App.css';
import IndexCon from './containers/IndexCon';
import { Routes, Route } from "react-router-dom"
import LoginCon from './containers/LoginCon';
import RegCon from './containers/RegCon';
import ListCon from './containers/ListCon';
import ListOneCon from './containers/ListOneCon';
import UpdateCon from './containers/UpdateCon';
import AdminCon from './containers/AdmintCon';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<IndexCon/>}></Route>
      <Route path="/login" element={<LoginCon/>}></Route>
      <Route path="/register" element={<RegCon/>}></Route>
      <Route path="/list" element={<ListCon/>}></Route>
      <Route path="/update/:id" element={<UpdateCon/>}></Route>
      <Route path="/admin" element={<AdminCon/>}></Route>
      <Route path="/one/:id" element={<ListOneCon/>}></Route>
    </Routes>
    
    </>
  );
}

export default App;
