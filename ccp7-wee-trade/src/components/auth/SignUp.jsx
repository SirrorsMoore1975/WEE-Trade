import React, {useState, useEffect} from 'react';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { Link, useNavigate } from 'react-router-dom';

import {UserAuth} from '../context/AuthContext'
import './SignUp.css';

function SignUp(){
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [username, setUsername ] = useState('');
    const [attemptedLogin, setAttemptedLogin] = useState(false);
    const [attemptedNoEmail, setAttemptedNoEmail] =useState(false);
    const [attemptedNoPW, setAttemptedNoPW] = useState(false);
    

    const {createUser} = UserAuth();
    const navigate = useNavigate();

    useEffect(()=>{
        
        setAttemptedLogin(false);
    }, [email, password])
    // useEffect(() => {
    //     setAttemptedNoEmail(false);
    // },[email])
    // useEffect(()=>{
    //     setAttemptedNoPW(false);
    // },[password])
    if(!username){
        setUsername("anonymous");
    }
    if(!address){
        setAddress("N/A");
    }
    const handleSingUp = async (e) => {
        e.preventDefault();
        try{
            // if(!email){ 
            //     setAttemptedNoEmail(true);
            //     throw new Error("Email cannot be empty");
                
            // }
            // if(!password) {
            //     setAttemptedNoPW(true);
            //     throw new Error("Password cannot be empty");
            // }
            // send to authContext -> firebase
            await createUser(email, password, /* username, address */);
            navigate('/');
            
        } catch (err){
            console.error(err);
            setAttemptedLogin(true)
        }
    };

// const handleSignUp = async (e) => {
//     e.preventDefault();
//     const userCred = await createUserWithEmailAndPassword(auth, email, password);
//     console.log("🧒",userCred);
// }
//  const response = createUser;
//  console.log("💥",response)

// prepare payload to check if email existed
    // if existed don't proceed, somehow inform user email existed
    // else, create account, new id 

    

return (
    <div className="signup">
        <form onSubmit={handleSingUp}>
        <h1>Please Sign Up</h1>
        <label htmlFor="signup-username">Username:</label>
        <br />
            <input 
            htmlFor="signup-username" 
            type="text" 
            placeholder="Your wonderful name" 
            value={username} 
            onChange={(e) => {setUsername(e.target.value)}}/>

            
            <br />
            <label htmlFor="signup-email">Your Email:</label>
            <br />
            <input htmlFor="signup-email"  
            type="text" placeholder="Your email: example@example.com" 
            value={email} onChange={(e) => {setEmail(e.target.value)}} required={true}/>
                {attemptedNoEmail ? <p className="warning">Please specify your email</p> : null}
                <br />
            <label htmlFor="signup-pw" >Your Password:</label><br />
            <input htmlFor="signup-pw" 
            type="password" 
            value={password} 
            onChange={(e) => {setPassword(e.target.value)}} 
            placeholder="A Strong Password" required={true}></input>
            {attemptedNoPW ? <p className="warning">Password cannot be empty</p> : null}
            <br />
            <label htmlFor="signup-address" >Your Address:</label>
            <br />
                <input htmlFor="signup-address" type="textarea" value={address} placeholder="Your address" onChange={(e) => {setAddress(e.target.value)}}></input><br />
            <p>Click Submit to Sign up</p>

            <p className="warning">{attemptedLogin ? <>Authenticate Error. Please Try Again</> : null}</p>
            
            <button type="submit">Submit</button>
        </form>
        {/* <p><Link to="/">Home</Link></p> */}
        <p><Link to="/signin"></Link></p>
    </div>
);
}
export default SignUp;