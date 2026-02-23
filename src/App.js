import logo from './logo.svg';
import './App.css';
import IndexCon from './containers/IndexCon';
import { Routes, Route } from "react-router-dom"
import LoginCon from './containers/LoginCon';
import RegCon from './containers/RegCon';
import ListCon from './containers/ListCon';
import ListOneCon from './containers/ListOneCon';
import UpdateCon from './containers/UpdateCon';
import AdminCon from './containers/AdminCon';
import PostCon from './containers/PostCon';
import PostOneCon from './containers/PostOneCon';
import PostUpdateCon from './containers/PostUpdateCon';
import HeaderCom from './components/common/HeaderCom';
import PostAddCon from './containers/PostAddCon';


function App() {
  return (
    <>
      <Routes>
        <Route element={<HeaderCom />}>
          <Route path="/" element={<IndexCon />} />
          <Route path="/login" element={<LoginCon />} />
          <Route path="/register" element={<RegCon />} />
          <Route path="/list" element={<ListCon />} />
          <Route path="/list/update/:id" element={<UpdateCon />} />
          <Route path="/list/one/:id" element={<ListOneCon />} />
          <Route path="/post" element={<PostCon />} />
          <Route path="/post/one/:id" element={<PostOneCon />} />
          <Route path="/post/update/:id" element={<PostUpdateCon />} />
          <Route path="/post/add" element={<PostAddCon />} />
          <Route path="/admin" element={<AdminCon />} />
        </Route>
      </Routes>

    </>
  );
}

export default App;
