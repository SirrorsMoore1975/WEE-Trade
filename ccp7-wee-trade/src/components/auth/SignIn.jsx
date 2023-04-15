import React, {useState} from 'react';
import { signInWithEmailAndPassword  } from 'firebase/auth';
import {auth} from '../../firebase/firebase';
import {Link} from 'react-router-dom';


function SignIn(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async (e) => {
        e.preventDefault();
        const userCred = await signInWithEmailAndPassword(auth, email, password);
        console.log("🤖", userCred);
    }
return (
    <div>
        <form onSubmit={handleSignIn}>
        <h1>Please Sign In before use</h1>
            <label htmlFor="signin-email">Your Email:</label>
                <input htmlFor="signin-email"  type="email" placeholder="example@example.com" value={email} onChange={(e) => {setEmail(e.target.value)}}></input>
            <label htmlFor="signin-pw" >Your Password:</label>
                <input htmlFor="signin-pw" type="password" value={password} placeholder="Your strong password" onChange={(e) => {setPassword(e.target.value)}}></input>
            <p>Click Submit to Signin</p>
                <p className="warning">{"testing"}</p>
                <p> Have no account? <Link to="/signup">Sign Up</Link></p>
                <p><Link to="/">Home</Link></p>
            <button type="submit" >Submit</button>
        </form>
    </div>
);
}
export default SignIn;