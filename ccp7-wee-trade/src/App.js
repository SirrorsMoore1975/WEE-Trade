// import logo from './logo.svg';
import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import {Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home'

function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/signin" element={<SignIn></SignIn>}></Route>
    <Route path="/signup" element={<SignUp></SignUp>}></Route>
    </Routes>
     



    </div>
  );
}

export default App;
