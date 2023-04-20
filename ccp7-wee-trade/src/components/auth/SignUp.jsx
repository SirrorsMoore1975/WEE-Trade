import React, {useState} from 'react';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import {Link} from 'react-router-dom';

import {UserAuth} from '../context/AuthContext'
import './SignUp.css';

function SignUp(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [username, setUsername ] = useState('');

    const {createUser} = UserAuth();

const handleSignUp = async (e) => {
    e.preventDefault();
    const userCred = await createUser(auth, email, password);
    console.log("🧒",userCred);
}


return (
    <div className="signup">
        <form onSubmit={handleSignUp}>
        <h1>Please Sign Up</h1>
        <label htmlFor="signup-username">Username:</label><br />
            <input htmlFor="signup-username" type="text" placeholder="Your wonderful name" value={username} onChange={(e) => {setUsername(e.target.value)}}></input><br />
            <label htmlFor="signup-email">Your Email:</label><br />
            <input htmlFor="signup-email"  type="text" placeholder="Your email: example@example.com" value={email} onChange={(e) => {setEmail(e.target.value)}}></input><br />
            <label htmlFor="signup-pw" >Your Password:</label><br />
            <input htmlFor="signup-pw" type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder="A Strong Password"></input><br />
            <label htmlFor="signup-address" >Your Address:</label><br />
                <input htmlFor="signup-address" type="textarea" value={address} placeholder="Your address" onChange={(e) => {setAddress(e.target.value)}}></input><br />
            <p>Click Submit to Sign up</p>
            <p className="warning">{"testing"}</p>
            <button type="submit">Submit</button>
        </form>
        <p><Link to="/">Home</Link></p>
        <p><Link to="/signin"></Link></p>
    </div>
);
}
export default SignUp;