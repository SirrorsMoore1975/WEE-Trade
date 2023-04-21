// import logo from './logo.svg';
import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Post from './components/post/Post';
import SinglePost from './components/post/SinglePost';
import Form from '../src/pages/Form';
import {Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home'
import {AuthContextProvider} from './components/context/AuthContext'
import TestPage from '../src/pages/TestPage';

function App() {

  



  return (
    <div className="App">
      <AuthContextProvider>
    <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/signin" element={<SignIn></SignIn>}></Route>
    <Route path="/signup" element={<SignUp></SignUp>}></Route>
    <Route path="/post" element={<Post seller={{id:"1234", name:"Max" }}></Post>}></Route>
    <Route path="/form" element={<Form></Form>}></Route>
    <Route path="/singlepost" element={<SinglePost></SinglePost>}></Route>
    <Route path="/testpage" element={<TestPage></TestPage>}></Route>
    </Routes>
    </AuthContextProvider>



    </div>
  );
}

export default App;
