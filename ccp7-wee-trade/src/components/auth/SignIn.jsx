import React, {useState, useEffect, useRef} from 'react';
// import { signInWithEmailAndPassword  } from 'firebase/auth';
// import {auth} from '../../firebase/firebase';
import {Link, useNavigate} from 'react-router-dom';
// import axios from 'axios';

import {UserAuth} from '../context/AuthContext';
import './Signin.css';

function SignIn(){
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [attemptedLogin, setAttemptedLogin] = useState(false);
    // const loginFailed = useRef(false);


    // const { loginUser, user } = UserAuth();
    // const navigate = useNavigate();

    // useEffect(()=>{
        
    //     setAttemptedLogin(false);
    // }, [email, password]);

    // const handleLogin = async (e) => {
    //     e.preventDefault();
        
    //     try {
    //         const response = await loginUser(email, password);
    //         console.log("🍊",response);
             
    //         navigate('/');
    //     } catch (err) {
    //         console.log(err);
    //         setAttemptedLogin(true)
            
    //     }
    // };

    
    



    const { loginUser, user } = UserAuth();
    const navigate = useNavigate();

    useEffect(()=>{
        
        setAttemptedLogin(false);
    }, [email, password]);

    const handleLogin = async (e) => {
        e.preventDefault();
        
        try {
            await loginUser(email, password);
            // console.log("🍊",response);
             
            navigate('/');
        } catch (err) {
            console.log(err);
            setAttemptedLogin(true)
            
        }
    };

    
    


    // const response = loginUser;
    // console.log("🍌",response);
    // const handleSignIn = async (e) => {
    //     e.preventDefault();
    //     const userCred = await signInWithEmailAndPassword(auth, email, password);
    //     console.log("🤖", userCred);
        
    //     // When login you want to see if your user profile or user data or that sort?
    //     const data = {email : e.target[0].value }
    //     console.log("🏩",data.email);
        
        
    //     axios.get(`/api/user/${data}`)
    //     .then((response) => {
    //         console.log("😍",response.body);
    //       }, (error) => {
    //         console.log(error);
    //       });
        
        
        
        
          // short hand version is axios.post('./login', {theEmail: email, thePassword: password })
        // axios({
        //     method: "post",
        //     url: "/login",
        //     data: {theEmail: email, thePassword: password}
        // })
        // .then((response) => {
        //     console.log(response);
        //   }, (error) => {
        //     console.log(error);
        //   });
    
return (
    <div className="signin">
        <form onSubmit={handleLogin}>
        <h1>Please Sign In before use</h1>
            
            <label htmlFor="signin-email">Your Email:</label><br />
                <input htmlFor="signin-email"  type="email" placeholder="example@example.com" value={email} onChange={(e) => {setEmail(e.target.value)}} required={true}></input ><br />
            <label htmlFor="signin-pw" >Your Password:</label><br />
                <input htmlFor="signin-pw" type="password" value={password} placeholder="Your strong password" onChange={(e) => {setPassword(e.target.value)}} required={true}></input><br />

            
            <p>Click Submit to Signin</p>
                
                <p className="warning">{attemptedLogin ? <>Authenticate Error. Please Try Again</> : null}</p>
                <p> Have no account? <Link to="/signup">Sign Up</Link></p>
                <p><Link to="/">Home</Link></p>
            <button type="submit" >Submit</button>
        </form>
    </div>
);
}
export default SignIn;