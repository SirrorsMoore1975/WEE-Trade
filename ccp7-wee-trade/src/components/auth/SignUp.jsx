import React, {useState} from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase';

function SignUp(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

const handleSignUp = async (e) => {
    e.preventDefault();
    const userCred = await createUserWithEmailAndPassword(auth, email, password);
    console.log("🧒",userCred)
}

return (
    <div>
        <form onSubmit={handleSignUp}>
        <h1>Please Sign Up</h1>
            <label htmlFor="signup-email">Your Email:</label>
            <input htmlFor="signup-email"  type="text" placeholder="Your email: example@example.com" value={email} onChange={(e) => {setEmail(e.target.value)}}></input>
            <label htmlFor="signup-pw" >Your Password:</label>
            <input htmlFor="signup-pw" type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder="A Strong Password"></input>
            <p>Click Submit to Sign up</p>
            <p className="warning">{"testing"}</p>
            <button type="submit">Submit</button>
        </form>
    </div>
);
}
export default SignUp;